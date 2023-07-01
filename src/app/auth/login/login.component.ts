import { Component } from '@angular/core';
import { AuthService } from '../auth-service';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomInput } from 'src/app/_component/input/input.component';
import { SpinnerComponent } from 'src/app/_component/spinner/spinner.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [CustomInput, SpinnerComponent, ReactiveFormsModule, NgIf],
})
export class LoginComponent {
  authForm: FormGroup = this._authService.authFormInit();
  error: string | null = null;
  loading: boolean = false;
  constructor(private _authService: AuthService) {}

  onSubmit() {
    if (this.authForm.valid) {
      this.loading = true;
      this._authService.login(this.authForm.value).subscribe({
        next: (res) => {
          this.loading = false;
          console.log(res);
        },
        error: (errorMessage) => {
          this.loading = false;
          this.error = errorMessage;
        },
      });
    }
  }
}

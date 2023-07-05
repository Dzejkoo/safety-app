import { Component } from '@angular/core';
import { AuthService } from '../auth-service';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomInput } from 'src/app/_component/input/input.component';
import { SpinnerComponent } from 'src/app/_component/spinner/spinner.component';
import { NgIf } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [
    CustomInput,
    SpinnerComponent,
    ReactiveFormsModule,
    NgIf,
    RouterLink,
  ],
})
export class LoginComponent {
  authForm: FormGroup = this._authService.authFormInit();
  error: string | null = null;
  loading: boolean = false;
  constructor(private _authService: AuthService, private _router: Router) {}

  onSubmit() {
    this._authService.markAllControlsAsTouched(this.authForm);
    if (this.authForm.valid) {
      this.loading = true;
      this._authService
        .login(
          this.authForm.controls.email.value,
          this.authForm.controls.password.value
        )
        .subscribe({
          next: (res) => {
            this.loading = false;
            this.authForm.reset();
            this._router.navigate(['/']);
          },
          error: (errorMessage) => {
            this.loading = false;
            this.error = errorMessage;
          },
        });
    }
  }
}

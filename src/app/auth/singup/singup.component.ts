import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../auth-service';
import { CustomInput } from 'src/app/_component/input/input.component';
import { SpinnerComponent } from 'src/app/_component/spinner/spinner.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss'],
  standalone: true,
  imports: [CustomInput, SpinnerComponent, ReactiveFormsModule, NgIf],
})
export class SingupComponent {
  authForm: FormGroup = this._authService.authFormInit();
  loading: boolean = false;
  error: string | null = null;

  constructor(private _authService: AuthService) {}

  onSubmit() {
    this.authForm.markAllAsTouched();
    if (this.authForm.valid) {
      this.loading = true;
      this._authService
        .singup(
          this.authForm.controls.email.value,
          this.authForm.controls.password.value
        )
        .subscribe({
          next: () => {
            this.loading = false;
          },
          error: (errorMessage) => {
            this.loading = false;
            this.error = errorMessage;
          },
        });
    }
  }
}

import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../auth-service';
import { CustomInput } from 'src/app/_component/input/input.component';
import { SpinnerComponent } from 'src/app/_component/spinner/spinner.component';
import { NgIf } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss'],
  standalone: true,
  imports: [
    CustomInput,
    SpinnerComponent,
    ReactiveFormsModule,
    NgIf,
    RouterLink,
  ],
})
export class SingupComponent {
  authForm: FormGroup = this._authService.authFormInit();
  loading: boolean = false;
  error: string | null = null;

  constructor(private _authService: AuthService, private _router: Router) {}

  onSubmit() {
    this._authService.markAllControlsAsTouched(this.authForm);
    if (this.authForm.valid) {
      this.loading = true;
      this._authService
        .singup(
          this.authForm.controls.email.value,
          this.authForm.controls.password.value
        )
        .subscribe({
          next: () => {
            this.authForm.reset();
            this.loading = false;
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

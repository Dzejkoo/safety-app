import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthService } from '../auth-service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss'],
})
export class SingupComponent {
  authForm: FormGroup = this._authService.authFormInit();
  error: string | null = null;

  constructor(private _authService: AuthService) {}

  onSubmit() {
    this.authForm.markAllAsTouched();
    if (this.authForm.valid) {
      this._authService.singup(this.authForm.value).subscribe({
        next: () => {},
        error: (errorMessage) => (this.error = errorMessage),
      });
    }
  }
}

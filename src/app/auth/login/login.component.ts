import { Component } from '@angular/core';
import { AuthService } from '../auth-service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  authForm: FormGroup = this._authService.authFormInit();
  constructor(private _authService: AuthService) {}

  onSubmit() {
    if (this.authForm.valid) {
      console.log(this.authForm);
    }
  }
}

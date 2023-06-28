import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private _formBulider: FormBuilder) {}

  authFormInit() {
    return this._formBulider.group({
      email: [''],
      password: [''],
    });
  }
}

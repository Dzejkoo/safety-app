import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { catchError, throwError } from 'rxjs';

const API_KEY = 'AIzaSyD7vy7NGIan6qvfPxUjP6NMMsz9UQ3Z8Fk';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private _formBulider: FormBuilder, private _http: HttpClient) {}

  authFormInit() {
    return this._formBulider.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  singup(signupData: { email: string; password: string }) {
    return this._http
      .post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
        signupData
      )
      .pipe(catchError((errorRes) => this._handleError(errorRes)));
  }

  login(loginData: { email: string; password: string }) {
    return this._http
      .post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
        loginData
      )
      .pipe(catchError((errorRes) => this._handleError(errorRes)));
  }

  private _handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error accurred!';
    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This email already exist!';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'Email not found!';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'Invalid password!';
        break;
    }
    return throwError(() => errorMessage);
  }
}

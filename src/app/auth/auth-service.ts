import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BehaviorSubject, catchError, tap, throwError } from 'rxjs';
import { User } from './user.model';

const API_KEY = 'AIzaSyD7vy7NGIan6qvfPxUjP6NMMsz9UQ3Z8Fk';

interface AuthResposne {
  email: string;
  idToken: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  user = new BehaviorSubject<User>(null);
  constructor(private _formBulider: FormBuilder, private _http: HttpClient) {}

  authFormInit() {
    return this._formBulider.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  singup(email: string, password: string) {
    return this._http
      .post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(catchError((errorRes) => this._handleError(errorRes)));
  }

  login(email: string, password: string) {
    return this._http
      .post<AuthResposne>(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(
        tap((userAuth) =>
          this._handleAuth(
            userAuth.email,
            userAuth.idToken,
            userAuth.localId,
            +userAuth.expiresIn
          )
        ),
        catchError((errorRes) => this._handleError(errorRes))
      );
  }

  private _handleAuth(
    email: string,
    token: string,
    id: string,
    tokenExpirationDate: number
  ) {
    const expirationDate = new Date(
      new Date().getTime() + +tokenExpirationDate * 1000
    );
    const user = new User(email, token, id, expirationDate);
    this.user.next(user);
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

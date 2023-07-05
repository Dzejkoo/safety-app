import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { BehaviorSubject, catchError, tap, throwError } from 'rxjs';
import { User } from './user.model';
import { Router } from '@angular/router';

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
  private _tokenTimer: any;
  constructor(
    private _formBulider: FormBuilder,
    private _http: HttpClient,
    private _router: Router
  ) {}

  authFormInit() {
    return this._formBulider.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  singup(email: string, password: string) {
    return this._http
      .post<AuthResposne>(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
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

  autoLogout(duration: number) {
    this._tokenTimer = setTimeout(() => {
      this.logout();
    }, duration);
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

  markAllControlsAsTouched(authForm: FormGroup) {
    Object.values(authForm.controls).forEach((control) => {
      control.markAsTouched();
    });
  }

  logout() {
    this.user.next(null);
    this._router.navigate(['/login']);
    localStorage.removeItem('userData');
    if (this._tokenTimer) {
      clearTimeout(this._tokenTimer);
    }
    this._tokenTimer = null;
  }

  autoLogin() {
    const userData: {
      email: string;
      id: string;
      _token: string;
      _tokenExpirationDate: string;
    } = JSON.parse(localStorage.getItem('userData'));
    if (!userData) {
      return;
    }
    const loadedUser = new User(
      userData.email,
      userData._token,
      userData.id,
      new Date(userData._tokenExpirationDate)
    );
    if (loadedUser.token) {
      this.user.next(loadedUser);
      const expirationDuration =
        new Date(userData._tokenExpirationDate).getTime() -
        new Date().getTime();
      this.autoLogout(expirationDuration);
    }
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
    console.log(expirationDate);
    const user = new User(email, token, id, expirationDate);
    console.log(user);
    this.user.next(user);
    localStorage.setItem('userData', JSON.stringify(user));
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

import { Injectable } from '@angular/core';
import { AuthService } from './auth-service';
import { map } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(private _authService: AuthService, private _router: Router) {}
  canActivate() {
    return this._authService.user.pipe(
      map((user) => {
        const isAuth = !!user;
        if (isAuth) {
          return true;
        }
        return this._router.createUrlTree(['/login']);
      })
    );
  }
}

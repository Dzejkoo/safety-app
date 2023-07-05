import { Injectable } from '@angular/core';
import { AuthService } from './auth-service';
import { map } from 'rxjs';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard {
  constructor(private _authService: AuthService, private _router: Router) {}
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this._authService.user.pipe(
      map((user) => {
        const isAuth = !!user;
        if (!isAuth) {
          return true;
        }
        return this._router.createUrlTree(['']);
      })
    );
  }
}

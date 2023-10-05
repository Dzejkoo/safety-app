import { Subscription } from 'rxjs';
import { AppComponent } from '../../app.component';
import { SingupComponent } from '../../auth/singup/singup.component';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth-service';
import { Router, RouterModule } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  imports: [RouterModule, NgIf],
  standalone: true,
})
export class NavigationComponent implements OnInit, OnDestroy {
  constructor(private _authService: AuthService) {}
  isAuth = false;
  authSub: Subscription;

  ngOnInit(): void {
    this.authSub = this._authService.user.subscribe((user) => {
      this.isAuth = !!user;
    });
  }
  ngOnDestroy(): void {
    this.authSub.unsubscribe();
  }

  handleLogout() {
    this._authService.logout();
  }
}

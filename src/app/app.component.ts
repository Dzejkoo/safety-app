import { Component } from '@angular/core';
import { AuthService } from './auth/auth-service';
import { NavigationComponent } from './_components/navigation/navigation.component';
import { Router, RouterOutlet } from '@angular/router';
import { FooterComponent } from './_components/footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [NavigationComponent, RouterOutlet, FooterComponent],
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'auth-app';
  constructor(private _authService: AuthService) {}

  ngOnInit() {
    this._authService.autoLogin();
  }
}

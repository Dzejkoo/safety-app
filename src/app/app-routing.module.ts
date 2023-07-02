import { RouterModule, Routes } from '@angular/router';
import { SportComponent } from './_pages/sport/sport.component';
import { MedicalComponent } from './_pages/medical/medical.component';
import { NgModule } from '@angular/core';
import { LoginComponent } from './auth/login/login.component';
import { MainComponent } from './_pages/main/main.component';
import { SingupComponent } from './auth/singup/singup.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'sport', component: SportComponent, canActivate: [AuthGuard] },
  { path: 'medical', component: MedicalComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SingupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

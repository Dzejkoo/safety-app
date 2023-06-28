import { RouterModule, Routes } from '@angular/router';
import { SportComponent } from './_pages/sport/sport.component';
import { MedicalComponent } from './_pages/medical/medical.component';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './_component/header/header.component';
import { LoginComponent } from './auth/login/login.component';
import { MainComponent } from './_pages/main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'sport', component: SportComponent },
  { path: 'medical', component: MedicalComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

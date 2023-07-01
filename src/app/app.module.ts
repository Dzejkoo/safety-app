import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavigationComponent } from './_component/navigation/navigation.component';
import { HeaderComponent } from './_component/header/header.component';
import { UpperCasePipe } from '@angular/common';
import { SportComponent } from './_pages/sport/sport.component';
import { MedicalComponent } from './_pages/medical/medical.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './auth/login/login.component';
import { SingupComponent } from './auth/singup/singup.component';
import { FooterComponent } from './_component/footer/footer.component';
import { MainComponent } from './_pages/main/main.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CustomInput } from './_component/input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HeaderComponent,
    SportComponent,
    MedicalComponent,
    LoginComponent,
    SingupComponent,
    FooterComponent,
    MainComponent,
    CustomInput,
  ],
  imports: [
    BrowserModule,
    UpperCasePipe,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

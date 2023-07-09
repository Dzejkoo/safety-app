import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UpperCasePipe } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavigationComponent } from './_components/navigation/navigation.component';
import { FooterComponent } from './_components/footer/footer.component';
import { PackagesComponent } from './_components/packages/packages.component';
import { LogoSliderComponent } from './_components/logo-slider/logo-slider.component';

@NgModule({
  declarations: [AppComponent, NavigationComponent, FooterComponent],
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

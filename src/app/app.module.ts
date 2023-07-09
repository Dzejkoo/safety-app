import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UpperCasePipe } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavigationComponent } from './_component/navigation/navigation.component';
import { FooterComponent } from './_component/footer/footer.component';
import { PackagesComponent } from './_component/packages/packages.component';

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

import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/routing';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes), importProvidersFrom(HttpClientModule)],
}).catch((e) => console.error(e));

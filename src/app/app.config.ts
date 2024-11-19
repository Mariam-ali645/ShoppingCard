import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
//import { FormsModule } from '@angular/forms';
import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),provideHttpClient(withFetch()),BrowserModule]
};

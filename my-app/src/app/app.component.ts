import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './approutes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes)
  ]
};

import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { User } from "./user/user";
@Component({
  selector: 'app-root',
  standalone: true,
   imports: [HeaderComponent, User],
  templateUrl: './app.component.html',
  styleUrls:  ['./app.component.css'],
})

export class AppComponent {}
 

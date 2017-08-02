import { Routes } from '@angular/router';
import { SessionService } from '../services/session.service';

import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { HomeComponent } from './home/home.component';
export const routes: Routes = [
  { path: 'login', component: LoginFormComponent },
  { path: 'signup', component: SignupFormComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: '' }
];

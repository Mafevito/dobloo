import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { SessionService } from '../services/session.service';
import { SolicitudeService } from '../services/solicitude.service';

import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { HomeComponent } from './home/home.component';
import { SolicitudeComponent } from './solicitude/solicitude.component';
import { SolicitudesComponent } from './solicitudes/solicitudes.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    SignupFormComponent,
    HomeComponent,
    SolicitudeComponent,
    SolicitudesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [SessionService, SolicitudeService ],
  bootstrap: [AppComponent]
})

export class AppModule { }

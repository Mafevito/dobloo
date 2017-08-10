import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { SessionService } from '../services/session.service';
import { SolicitudeService } from '../services/solicitude.service';
import { SolicitudesService } from '../services/solicitudes.service';
import { ProfileDetailsService } from '../services/profile-details.service';
import { RelationSolicitudeUserService } from '../services/relation-solicitude-user.service'

import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { HomeComponent } from './home/home.component';
import { SolicitudeComponent } from './solicitude/solicitude.component';
import { SolicitudeListComponent } from './solicitude-list/solicitude-list.component';
import { SolicitudeDetailsComponent } from './solicitude-details/solicitude-details.component';
import { EditSolicitudeComponent } from './edit-solicitude/edit-solicitude.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MapsComponent } from './maps/maps.component';
import { ChartsComponent } from './charts/charts.component';

// import { ChartsModule } from 'ng2-charts/ng2-charts';
import { ChartsModule } from 'ng2-charts';
import { AgmCoreModule } from "@agm/core";
import {} from '@types/googlemaps'
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    SignupFormComponent,
    HomeComponent,
    SolicitudeComponent,
    SolicitudeListComponent,
    SolicitudeDetailsComponent,
    EditSolicitudeComponent,
    UserProfileComponent,
    NavbarComponent,
    MapsComponent,
    ChartsComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartsModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyCg7JIFACkTcy3Vn3tg-xsNzPQoeOzO-M8",
      libraries: ["places"]
    }),
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [SessionService, RelationSolicitudeUserService , SolicitudeService, SolicitudesService, ProfileDetailsService],
  bootstrap: [AppComponent]
})

export class AppModule { }

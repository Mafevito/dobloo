import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment'
import { SessionService } from '../../services/session.service';
import { SolicitudeService } from '../../services/solicitude.service';

import { SolicitudeDetailsComponent } from '../solicitude-details/solicitude-details.component';

@Component({
  selector: 'app-solicitude',
  templateUrl: './solicitude.component.html',
  styleUrls: ['./solicitude.component.css'],
})


export class SolicitudeComponent implements OnInit {
  error: string;
  name: string;
  bloodType: string;
  years: string;
  amountBlood: string;
  city: string;
  reason: string;
  formInfo = {
    name: '',
    bloodType:'',
    years: '',
    amountBlood: '',
    reason: '',
    cityPosition: {
      longitud: 0,
      latitud: 0
    }
}

  constructor(public solicitude: SolicitudeService ,public router: Router) { }

  ngOnInit() {}

  submit(){
    this.solicitude.newSolicitude(this.formInfo)
      .subscribe(
        (user) => console.log(user),
        (err) => this.error = err
      );
      this.router.navigate(['solicitudes'])

    // this.formInfo.cityPosition.longitud = this.longitude;
    // this.formInfo.cityPosition.latitud = this.latitude;
    // this.creator = this.user._id
    console.log(this);
  }

  getPosition(position) {
    this.formInfo.cityPosition = position;
    console.log(this.formInfo)
  }
}

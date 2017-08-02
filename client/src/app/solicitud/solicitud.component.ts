import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment'
import { SessionService } from '../../services/session.service';
import { SolicitudService } from '../../services/solicitud.service';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})

export class SolicitudComponent implements OnInit {
  error: string;
  name: string
  bloodType: string
  birthDate: string
  amountBlood: string
  reason: string

  constructor(public solicitud: SolicitudService ,public router: Router) { }

  ngOnInit() {}

  submit(){
    this.solicitud.newSolicitud(this.name, this.bloodType, this.birthDate, this.amountBlood, this.reason)
      .subscribe(
        (user) => console.log(user),
        (err) => this.error = err
      );
  }
}

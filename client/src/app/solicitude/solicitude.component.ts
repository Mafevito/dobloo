import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment'
import { SessionService } from '../../services/session.service';
import { SolicitudeService } from '../../services/solicitude.service';

@Component({
  selector: 'app-solicitude',
  templateUrl: './solicitude.component.html',
  styleUrls: ['./solicitude.component.css']
})
export class SolicitudeComponent implements OnInit {
  error: string;
  name: string
  bloodType: string
  birthDate: string
  amountBlood: string
  reason: string

  constructor(public solicitude: SolicitudeService ,public router: Router) { }

  ngOnInit() {}

  submit(){
    this.solicitude.newSolicitude(this.name, this.bloodType, this.birthDate, this.amountBlood, this.reason)
      .subscribe(
        (user) => console.log(user),
        (err) => this.error = err
      );
      this.router.navigate(['solicitudes'])
  }
}

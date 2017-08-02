import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {environment} from '../../environments/environment'
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})

export class SolicitudComponent implements OnInit {
  name: string
  bloodType: string
  birthDate: string
  amountBlood: string
  reason: string

  constructor(public router: Router) { }

  ngOnInit() {}

  submit(){
    
  }
}

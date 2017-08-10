import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment'
import { SolicitudesService } from '../../services/solicitudes.service';
import { SessionService} from '../../services/session.service'
import { Observable } from 'rxjs';
import {RelationSolicitudeUserService} from '../../services/relation-solicitude-user.service'

import { ElementRef, NgZone, ViewChild } from '@angular/core';
import { FormControl } from "@angular/forms";
import { MapsAPILoader } from '@agm/core';

@Component({
  selector: 'app-solicitude-details',
  templateUrl: './solicitude-details.component.html',
  styleUrls: ['./solicitude-details.component.css']
})

export class SolicitudeDetailsComponent implements OnInit {
  solicitude:any;
  solicitudeId:string;
  error: string;
  user:any;
  relationForm = {
    userId:'',
    solicitudeId:''
  }
  progress = 0;

  constructor(
    public sessionUser : SessionService,
    private solicitudesService:SolicitudesService,
    private relationSolicitudeUserService:RelationSolicitudeUserService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.sessionUser.isLoggedIn().subscribe( result => this.user = result);
    this.route.params.subscribe( params => {
      this.solicitudesService.getDetails(params['id'])
        .subscribe( solicitude => {
          // console.log(solicitude);
          console.log(solicitude)
          this.solicitude = solicitude
        })
    })
  }

  deleteSolicitude() {
    this.solicitudesService.getDelete(this.solicitude)
    .subscribe(
      (solicitude) => this.router.navigate(['/solicitudes']),
      (err) => this.error = err
    );
  }

/* Relation SolicitudeUser*/
  donate() {
    console.log(this.user._id);
    console.log(`nombre del solicitante => ${this.solicitude.name}`);
    console.log(this.solicitude._id)
    this.relationForm.userId = this.user._id;
    this.relationForm.solicitudeId = this.solicitude._id;
    this.relationSolicitudeUserService.solicitudeUserRelation(this.relationForm)
      .subscribe( result => this.router.navigate(['/solicitudes/', this.solicitude._id ]));
       console.log('gracias por donar')

       this.progress+=20;
       console.log(this.progress);
  }

}

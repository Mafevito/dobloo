import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment'
import { SolicitudesService } from '../../services/solicitudes.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-solicitude-details',
  templateUrl: './solicitude-details.component.html',
  styleUrls: ['./solicitude-details.component.css']
})

export class SolicitudeDetailsComponent implements OnInit {
  solicitude:object;
  solicitudeId:string;
  error: string;

  constructor(
    private solicitudesService:SolicitudesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.solicitudesService.getDetails(params['id'])
        .subscribe( solicitude => {
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

  donate() {
    console.log('gracias por donar')
  }

}

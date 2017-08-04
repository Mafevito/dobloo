import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment'
import { SolicitudesService } from '../../services/solicitudes.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-solicitude',
  templateUrl: './edit-solicitude.component.html',
  styleUrls: ['./edit-solicitude.component.css']
})

export class EditSolicitudeComponent implements OnInit {
  solicitude:object;
  error:string;

  constructor(
    private solicitudesService:SolicitudesService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.solicitudesService.getDetails(params['id'])
        .subscribe( solicitude => {
          this.solicitude = solicitude
        })
    })
  }

  editSolicitude(){
    console.log('holi')
    console.log(this.solicitude)
    this.solicitudesService.edit(this.solicitude)
    .subscribe(
      (event) => this.router.navigate(['/solicitudes']),
      (err) => this.error = err
    );
  }
}

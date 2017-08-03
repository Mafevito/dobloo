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
  constructor(private route:ActivatedRoute, private phS:SolicitudesService) {

  this.route.data.subscribe((resolved) => {
    this.solicitude = resolved['solicitude'];
  });
}
  ngOnInit() {}

}

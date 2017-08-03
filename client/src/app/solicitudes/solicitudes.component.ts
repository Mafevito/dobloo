import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment'
import { SolicitudesService } from '../../services/solicitudes.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.css']
})
export class SolicitudesComponent implements OnInit {
  solicitudes:Observable<Array<object>>;

  constructor(private solicitudesService: SolicitudesService) { }

  ngOnInit() {
    this.solicitudes = this.solicitudesService.getList();
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment'
import { SolicitudesService } from '../../services/solicitudes.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-solicitude-list',
  templateUrl: './solicitude-list.component.html',
  styleUrls: ['./solicitude-list.component.css']
})

export class SolicitudeListComponent implements OnInit {
  solicitudes:Observable<Array<object>>;

  constructor(private solicitudesService: SolicitudesService) { }

  ngOnInit() {
    this.solicitudes = this.solicitudesService.getList();
  }

}

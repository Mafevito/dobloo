import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment'
import { SolicitudesService } from '../../services/solicitudes.service';
import { SessionService} from '../../services/session.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  solicitude:any;
  solicitudeId:string;
  error: string;
  user:any;

  constructor(
    private sessionUser : SessionService,
    private solicitudesService:SolicitudesService,
    private router: Router,
    private route: ActivatedRoute

  ) {}

  ngOnInit() {
    this.sessionUser.isLoggedIn().subscribe( result => this.user = result);
    this.route.params.subscribe( params => {
      this.solicitudesService.getDetails(params['id'])
        .subscribe( solicitude => {
          this.solicitude = solicitude
        })
    })
  }

}

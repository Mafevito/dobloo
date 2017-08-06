import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { ProfileDetailsService } from '../../services/profile-details.service';
import { SessionService } from '../../services/session.service';
import { SolicitudesService } from '../../services/solicitudes.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})

export class UserProfileComponent implements OnInit {
  user: object;

  constructor(
    private profile:ProfileDetailsService,
    private router: Router,
    private route: ActivatedRoute,
    private session: SessionService
  ) {
    session.isLoggedIn().subscribe( user => this.user = user);
   }

  ngOnInit() {
  }

}

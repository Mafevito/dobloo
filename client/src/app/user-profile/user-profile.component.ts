import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { ProfileDetailsService } from '../../services/profile-details.service';
import { SessionService } from '../../services/session.service';
import { SolicitudesService } from '../../services/solicitudes.service';
import { RelationSolicitudeUserService } from '../../services/relation-solicitude-user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})

export class UserProfileComponent implements OnInit {
  user: any;
  donations: any;

  constructor(
    private profile:ProfileDetailsService,
    private relation: RelationSolicitudeUserService,
    private router: Router,
    private route: ActivatedRoute,
    public session: SessionService
  ) {}

  ngOnInit() {
    this.session.isLoggedIn().subscribe( user => {
      this.user = user
      this.relation.getUserDonations(user).subscribe( donations => {
        this.donations = donations
      })
    });
  }

}

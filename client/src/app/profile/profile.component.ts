import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment'
import { SessionService } from '../../services/session.service';
import { ProfileDetailsService } from '../../services/profile-details.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  user: string;
  email: string;

  constructor(
    private profileDetails: ProfileDetailsService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    // this.route.params.subscribe( params => {
    //   this.profileDetails.getDetails(params['id'])
    //   .subscribe( user => {
    //     this.user = user
    //   })
    // })
 }
}

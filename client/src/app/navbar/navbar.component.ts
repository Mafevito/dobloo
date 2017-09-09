import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user: any;

  constructor(public session: SessionService, private router: Router) { }

  ngOnInit() {
    this.session.isLoggedIn().subscribe( user => {
      this.user = user
    });
  }

  logout(){
    this.session.logout().subscribe();
    this.router.navigate(['/'])
  }
}

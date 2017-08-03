import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment'
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})

export class SignupFormComponent implements OnInit {
  error: string;
  username:string;
  email:string;
  password:string;
  fullName:string;
  bloodType:string;
  birthDate:string;
  city:string;
  weight:string;
  height:string;
  phoneNumber:number;

  constructor(private session: SessionService, private router: Router) { }
  ngOnInit() {}

  signup() {
    this.session.signup(this.username, this.password, this.email, this.fullName, this.bloodType, this.birthDate, this.city, this.weight, this.height, this.phoneNumber)
      .subscribe(
        (user) => console.log(user),
        (err) => this.error = err
      );
      this.router.navigate(['home'])
   }
  }

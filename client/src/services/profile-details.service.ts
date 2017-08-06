import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { environment } from '../environments/environment';

@Injectable()
export class ProfileDetailsService {
  BASE_URL:string=`${environment.BASE_URL}`;

  constructor(private http: Http) { }

  getProfile() {
    return this.http.get(`${this.BASE_URL}/api/profile`)
      .map((res) => {
        console.log(res);
        return res.json();})
  }

  getDetails(id) {
    return this.http.get(`${this.BASE_URL}/api/profile/${id}`)
      .map((res) => res.json());
  }

}

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { environment } from '../environments/environment';

@Injectable()
export class RelationSolicitudeUserService {
  BASE_URL:string=`${environment.BASE_URL}`;
  options:object = {withCredentials:true};

  constructor(private http: Http) {}

  solicitudeUserRelation(content) {
  console.log(content)
    return this.http.post(`${this.BASE_URL}/api/relation/solicitude-donante`, content,this.options)
         .map(res => res.json())
  }

  getUserDonations(user){
    return this.http.get(`${this.BASE_URL}/api/relation/user-donations/${user._id}`, this.options)
      .map( res => res.json() )
  }

  getDelete(solicitude) {
    return this.http.delete(`${this.BASE_URL}/api/solicitude/${solicitude._id}`)
      .map((res) => res.json());
  }

}

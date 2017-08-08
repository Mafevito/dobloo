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
    console.log(`${this.BASE_URL}/api/relation/relationNew`)
    return this.http.post(`${this.BASE_URL}/api/relation/relationNew`, content,this.options)
      .map(res => res.json())
  }

}

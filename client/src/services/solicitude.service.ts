import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { environment } from '../environments/environment';

export interface Solicitude {
  name:string,
  updated_at:Date,
  created_at:Date
}

@Injectable()
export class SolicitudeService {
  BASE_URL:string=`${environment.BASE_URL}/api/solicitude`;
  options:object = {withCredentials:true};

  constructor(private http:Http) { }

  handleError(e) {
    console.error("Error en la llamada a la API");
    return Observable.throw(e.json().message);
  }

  newSolicitude(name:string, bloodType:string, birthDate:string, amountBlood:string, reason:string):Observable<Solicitude> {
    return this.http.post(`${this.BASE_URL}`, {name,bloodType,birthDate,amountBlood, reason}, this.options)
    .map(res => res.json())
    .catch(this.handleError);
  }
}

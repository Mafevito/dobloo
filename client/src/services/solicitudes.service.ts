import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { environment } from '../environments/environment';

@Injectable()
export class SolicitudesService {
  BASE_URL:string=`${environment.BASE_URL}`;

  constructor(private http: Http) { }

  getList() {
    console.log("entro a servicios")
    return this.http.get(`${this.BASE_URL}/api/solicitude`)
      .map((res) => {
        console.log(res);
        return res.json()});
  }

  get(id) {
   return this.http.get(`${this.BASE_URL}/api/solicitude/${id}`)
     .map((res) => res.json());
 }
}

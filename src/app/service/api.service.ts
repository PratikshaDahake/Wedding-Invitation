import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
baseurl="http://localhost:9090/GuetDetails/"
  constructor(private api: HttpClient ) { }
  getdata():Observable<any>
  {
    return this.api.get(this.baseurl+"job/getAll");
  }
}

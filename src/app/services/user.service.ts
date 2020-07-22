import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = `${environment.apiUrl}/users`;
  constructor(private http: HttpClient) { }

  findTutors(): Observable<any>{
    return this.http.get(`${this.url}?type=tutor`);
  }

}

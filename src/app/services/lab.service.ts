import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LabService {

  constructor(private http: HttpClient) { }

  getLabs(): Observable<any>{
    const urlItems = `${environment.apiUrl}/stores`;
    return this.http.get<any>(urlItems);
  }
}

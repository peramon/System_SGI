import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LabService {

  item: Observable<any>

  constructor(private http: HttpClient) { }

  getLabs(): Observable<any>{
    const urlItems = `${environment.apiUrl}/stores`;
    return this.http.get<any>(urlItems);
  }

  getLabId(id: string): Observable<any>{
    const urlItems = `${environment.apiUrl}/stores/${id}`;
    return this.http.get<any>(urlItems);
  }

  getStoreResource(id: string){
    const urlApiI = `${environment.apiUrl}/store-items?store=${id}`;
    return this.item = this.http.get(urlApiI);
  }
}


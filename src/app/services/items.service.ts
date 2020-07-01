import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private http: HttpClient) {}

   getItems(): Observable<any>{
    const urlItems = `${environment.apiUrl}/items`;
    return this.http.get(urlItems);
  }
}

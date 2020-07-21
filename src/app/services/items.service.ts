import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import ItemInterface from '../models/item/item-interface';
import { ItemIdInterface } from '../models/itemId-interface';



@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private http: HttpClient) { }

  items: Observable<any>;
  item: Observable<any>;

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  getItems() {
    const urlItems = `${environment.apiUrl}/items`;
    return this.http.get<ItemInterface[]>(urlItems);
  }

  getItemId(id: string) {
    const urlApiI = `${environment.apiUrl}/items/${id}`;
    return this.item = this.http.get<ItemIdInterface[]>(urlApiI);
  }

  saveItem(item: ItemInterface): Observable<ItemInterface> {
    const urlApi = `${environment.apiUrl}/items`;
    return this.http.post<ItemInterface>(urlApi, item)
      .pipe(map(data => data));
  }

}

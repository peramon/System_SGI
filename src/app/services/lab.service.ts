import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import StoreItem from '../models/store-item/store-item.interface';
import ItemInterface from '../models/item/item-interface';

@Injectable({
  providedIn: 'root'
})
export class LabService {

  item: Observable<any>

  constructor(private http: HttpClient) { }

  getLabs(): Observable<any> {
    const urlItems = `${environment.apiUrl}/stores`;
    return this.http.get<any>(urlItems);
  }

  getLabId(id: string): Observable<any> {
    const urlItems = `${environment.apiUrl}/stores/${id}`;
    return this.http.get<any>(urlItems);
  }

  getStoreResource(id: string): Promise<StoreItem[]> {
    const url = `${environment.apiUrl}/store_items?store=${id}`;
    return this.http.get<StoreItem[]>(url).toPromise();
  }

  getStoreItems(id: string): Promise<ItemInterface[]>{
    const url = `${environment.apiUrl}/items?store_items.store=${id}`;
    return this.http.get<ItemInterface[]>(url).toPromise();
  }
}


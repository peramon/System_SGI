import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import StoreItem from '../models/store-item/store-item.interface';



@Injectable({
  providedIn: 'root'
})
export class StoreItemService {

  storeItem: StoreItem;
  constructor(private http: HttpClient) { }

  async findStoreItemsByItemId(itemId: number): Promise<StoreItem[]> {
    const url = `${environment.apiUrl}/store-items?item=${itemId}`;
    return this.http.get<StoreItem[]>(url).toPromise();
  }

  async findStoreItemsByStoreId(storeId: number): Promise<StoreItem[]>{
    const url = `${environment.apiUrl}/store-items?store=${storeId}&status=1`;
    return this.http.get<StoreItem[]>(url).toPromise();
  }
}

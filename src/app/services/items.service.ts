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

  async saveItem(item): Promise<void> {
    const urlApi = `${environment.apiUrl}/store-items`;
    await this.http.post(urlApi, item).toPromise();
  }

  async updateItem(id, item): Promise<void> {
    const urlApii = `${environment.apiUrl}/store-items/${id}`;
    await this.http.put(urlApii, item).toPromise();
  }

  async getStats(storeId: string): Promise<any>{
    const urlApi = `${environment.apiUrl}/stats/${storeId}`;
    return this.http.get(urlApi).toPromise();
  }

  async getRequestedCount(storeId: string): Promise<any>{
    const urlApi = `${environment.apiUrl}/request-count/${storeId}`;
    return this.http.get(urlApi).toPromise();
  }

  async getBorrowedCount(storeId: string): Promise<any>{
    const urlApi = `${environment.apiUrl}/borrowed-count/${storeId}`;
    return this.http.get(urlApi).toPromise();
  }

  deleteItem(id: string): Observable<{}>{
    const urlApi2 = `${environment.apiUrl}/store-items/${id}`;
    return this.http.delete(urlApi2);
  }

  async createItem(body: FormData): Promise<any>{
    const urlApi = `${environment.apiUrl}/items`;
    return this.http.post(urlApi, body).toPromise();
  }

}

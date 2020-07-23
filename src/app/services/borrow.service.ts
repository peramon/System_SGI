import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import Borrow from '../models/borrow/borrow.interface';

@Injectable({
  providedIn: 'root'
})
export class BorrowService {
  url = `${environment.apiUrl}/borrows`;
  constructor(private http: HttpClient) { }

  async create(toBeCreated: Borrow): Promise<void>{
    await this.http.post(this.url, toBeCreated).toPromise();
  }

  async getBorrowRequestsByBorrowerId(borrowerId: any): Promise<any>{
    return await this.http.get(`${this.url}?borrower=${borrowerId}`).toPromise();
  }

  async getBorrowRequestsByLabId(labId: any): Promise<any>{
    return await this.http.get(`${this.url}?store_item.store=${labId}`).toPromise();
  }
}

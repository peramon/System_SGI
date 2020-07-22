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
}

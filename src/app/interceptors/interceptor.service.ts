import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let headers: HttpHeaders;
    if (localStorage.getItem('accessToken') !== null) {
      headers = new HttpHeaders({
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`
      });
    }else{
      headers = new HttpHeaders();
    }
    const reqClone = req.clone({
      headers
    });
    return next.handle(reqClone).pipe(
      catchError(this.handleError)
    );
  }
  handleError(error: HttpErrorResponse) {
    console.log('App Error');
    console.warn(error);
    return throwError('Error personalizado');
  }
}

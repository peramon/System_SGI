import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router){}
  Token = localStorage.getItem('accessToken');
  user = localStorage.getItem('currentUser');

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // return localStorage.getItem('accessToken') !== null ? true : false;
      // Sirve para la autenticacion entre paginas
      if (this.Token === null ){
        console.log('No esta logueado');
        this.router.navigate(['/login']);
        return false;

      }else{
        console.log(' esta logueado');
        return true;
      }
  
  }
}

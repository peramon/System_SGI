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

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // return localStorage.getItem('accessToken') !== null ? true : false;
      // Sirve para la autenticacion entre paginas
      // tslint:disable-next-line: deprecation
      if(this.Token === null ){
        this.router.navigate(['/login'])
        console.log('No esta logueado');
        return false;
      }else{
        console.log(' esta logueado')
        return true;
      }
  
  }
}

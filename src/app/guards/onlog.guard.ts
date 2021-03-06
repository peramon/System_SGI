import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class OnlogGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router){}

  user = JSON.parse(localStorage.getItem('currentUser'));
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.user === null ){
        return true;
      }else{
        this.router.navigate(['/share'])
        return false;
      }
  }
  
}

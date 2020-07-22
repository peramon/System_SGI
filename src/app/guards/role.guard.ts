import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

constructor(private router: Router){}

  user = JSON.parse(localStorage.getItem('currentUser'));

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if (this.user.role.type === 'storeadmin'){
        return true;
      }else{
        this.router.navigate(['/share']);
        return false;
      }
  }
  
}

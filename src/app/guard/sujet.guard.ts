import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../Services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class SujetGuard implements CanActivate {
  constructor (private authService: AuthService,
    private router : Router) {}
canActivate(
    //   route: ActivatedRouteSnapshot,
    //   state: RouterStateSnapshot): boolean {
    //   if (this.authService.isAdmin())
    //         return true;
    //  else
    //   {
    //   this.router.navigate(['forbidden']);//vous n'avez pas le droit d'accéder
    //   return false;
    //  }

     

    //  }

   route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;}
  
}

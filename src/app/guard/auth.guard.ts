import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../Services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private route:Router,private authService:AuthService){}
  canActivate() {
    if (this.authService.loggedIn()) {
      return true      
    }
    else{
      this.route.navigate(['login'])
      return false
    }
  
    //route: ActivatedRouteSnapshot,
   // state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //return true;
  
  } 
  
}

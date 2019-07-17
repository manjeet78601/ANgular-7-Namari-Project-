import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class RouteguardService  implements CanActivate {

  constructor(private router: Router) { }
  canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (localStorage.getItem('currentUser')) {
    return true ;
  }
  this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
   return false ;
  }
}

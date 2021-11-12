import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoutGuardService implements CanActivate {

  login: boolean = false

  constructor() { }

  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean  {
     return this.login;
}

setLogin(): void{
  this.login = !this.login;
}

}

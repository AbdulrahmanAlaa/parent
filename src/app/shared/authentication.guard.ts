import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './services/auth.service';
import { config } from './../../config/pages-config';
@Injectable()
export class AuthenticationGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService
  ) {

  }
  /**
   * Ensure the User is Logged in To Show the Data
   * @param next 
   * @param state 
   */
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let isAuthenticated: boolean = this.authService.isAuthenticated();
    if (!isAuthenticated) {
      this.router.navigate([config.login.name]);
    }
    return isAuthenticated;
  }
}

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SessionGuard  {
  constructor(private cookieService: CookieService, private router: Router) {}

  canActivate(
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.checkSession();
  }

  checkSession(): boolean {
    try {
      const token = this.cookieService.get('token');
      if (token) {
        return true;
      } else {
        this.router.navigate(['/auth']);
        return false;
      }
    } catch (err) {
      console.log('No se pudo redirection a la pagina', err);
      return false;
    }
  }
}

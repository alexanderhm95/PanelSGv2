import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class SessionGuard implements CanActivate {
  constructor(private cookieService: CookieService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> {
    return this.checkSession().pipe(
      map((tokenExists) => {
        if (tokenExists) {
          return true;
        } else {
          return this.router.createUrlTree(['/auth'], {
            queryParams: { returnUrl: state.url },
          });
        }
      })
    );
  }

  checkSession(): Observable<boolean> {
    const token = this.cookieService.get('token');
    return of(!!token); // Devuelve un observable de booleano indicando si el token existe o no
  }
}

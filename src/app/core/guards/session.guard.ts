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
import { JwtService } from '@/app/shared/services/utils/jwt.service';

@Injectable({
  providedIn: 'root',
})
export class SessionGuard implements CanActivate {
  constructor(
    private router: Router,
    private cookieService: CookieService,
    private jwtService: JwtService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const token = this.cookieService.get('token');
    const isLoggedIn = token && !this.jwtService.isTokenExpired(token);

    if (isLoggedIn) {
      return true;
    } else {
      this.router.navigate(['/auth'], {
        queryParams: { returnUrl: state.url },
      });
      return false;
    }
  }
}

import { AuthService } from '@/app/shared/services/api/auth.service';
import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

export const SessionGuard = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): boolean => {
  //export const SessionGuard =():boolean =>{

  const router = inject(Router);
  const cookieService = inject(CookieService);
  const authService = inject(AuthService);

  try {
    const token = cookieService.check('token');

    if (!token) {
      console.log('Sesión no autorizado ');
      cookieService.deleteAll();
      router.navigate(['auth'], {
        queryParams: { returnUrl: state.url },
      });
      return false;
    }
    console.log('Acceso correcto...');
    return token;
  } catch (e) {
    console.log('Acceso no autorizado' + e);
    return false;
  }
};

import { AuthService } from '@/app/shared/services/api/auth.service';
import { JwtService } from '@/app/shared/services/utils/jwt.service';
import { Injectable, inject } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

export const AuthGuard = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): boolean => {
  const cookieService = inject(CookieService);
  const authService = inject(AuthService); // Reemplaza "AuthService" con tu servicio de autenticación
  const jwtService = inject(JwtService);
  const router = inject(Router);

  try {
    //const token = cookieService.check('token')
    const requiredRole = route.data['requiredRole']; // Obtener el rol requerido para la ruta
    const userRole = authService.getUserRole(); // Obtener el rol del usuario desde tu servicio de autenticación
    console.log('Se espera:', requiredRole, 'usted es :', userRole);
    //if (token) {
      // Verificar si el usuario tiene el rol necesario para acceder a la ruta
      if (requiredRole.includes(userRole) ) {
        // El usuario tiene el rol necesario, permitir el acceso a la ruta
        console.log('Permiso concedido');
        return true;
      }
      console.log(
        `Falta privilegios se espera: ${requiredRole} usted es : ${userRole} `
      );
      // El usuario no tiene el rol necesario, redirigir a una página de acceso no autorizado o mostrar un mensaje de error
      router.navigate(['/']); // Reemplaza "/unauthorized" con la ruta de tu página de acceso no autorizado
      return false;
    //} else {
    //  // El usuario no está autenticado, redirigir a la página de inicio de sesión
    //  router.navigate(['auth/login']); // Reemplaza "/login" con la ruta de tu página de inicio de sesión
    //  return false;
    //}
  } catch (e) {
    console.log(e);
    router.navigate(['auth/login']); // Reemplaza "/login" con la ruta de tu página de inicio de sesión
    return false;
  }
};

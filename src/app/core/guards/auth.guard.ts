import { AuthService } from '@/app/shared/services/api/auth.service';
import { JwtService } from '@/app/shared/services/utils/jwt.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService, // Reemplaza "AuthService" con tu servicio de autenticación
    private jwtService: JwtService,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.jwtService.isLoggedIn()) {
      // Verificar si el usuario tiene el rol necesario para acceder a la ruta
      const requiredRole = next.data['requiredRole']; // Obtener el rol requerido para la ruta
      const userRole = this.authService.getUserRole(); // Obtener el rol del usuario desde tu servicio de autenticación

      if (userRole === requiredRole) {
        // El usuario tiene el rol necesario, permitir el acceso a la ruta
        return true;
      } else {
        // El usuario no tiene el rol necesario, redirigir a una página de acceso no autorizado o mostrar un mensaje de error
        this.router.navigate(['/home']); // Reemplaza "/unauthorized" con la ruta de tu página de acceso no autorizado
        return false;
      }
    } else {
      // El usuario no está autenticado, redirigir a la página de inicio de sesión
      this.router.navigate(['auth/login']); // Reemplaza "/login" con la ruta de tu página de inicio de sesión
      return false;
    }
  }
}

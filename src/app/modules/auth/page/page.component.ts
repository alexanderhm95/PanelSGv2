import { ClsFormAuth } from './../../../core/classForm/cls-form-auth';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/shared/services/api/auth.service';
import { NotificationsService } from '@/app/shared/services/utils/notifications.service';
import { JwtService } from '@/app/shared/services/utils/jwt.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css'],
})
export class PageComponent implements OnInit {
  //Iniciamos variables publicas
  public backgroundImage = '../../../../assets/Inicio/Fondo.webp';
  public image= '../../../../assets/Inicio/children.webp';
  public formLogin = new ClsFormAuth();
  public errorSession = false;
  public errorMessage = '';
  public showPassword = false;

  //Creamos el constructor
  constructor(
    private notification: NotificationsService,
    private cookieService: CookieService,
    private authService: AuthService,
    private jwtService: JwtService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formLogin.form.reset();
    const token = this.cookieService.get('token');
    if (token && !this.jwtService.isTokenExpired(token)) {
      this.router.navigate(['/home']);
    }
  }

  sendLogin() {
    const { email, password } = this.formLogin.form.value;
    if (this.formLogin.form.invalid) return;
    this.errorSession = false;
    this.errorMessage = '';

    this.authService.login(email, password).subscribe(
      (res) => {
        const { token } = res;
        const exp = this.jwtService.getTokenExpirationDate(token);
        this.cookieService.set('token', token, exp ? exp : undefined);

        this.formLogin.form.reset();
        this.notification.showLoading(
          'Iniciando sesión',
          'Espere por favor',
          200
        );
        setTimeout(() => {
          this.router.navigate(['/home']);
        }, 200);
      },
      (error) => {
        if (error.status === 0) {
          this.notification.showError(
            'Error',
            'Error de conexión con el servidor, inténtelo mas tarde'
          );
        } else {
          this.errorSession = true;
          this.errorMessage = error.error.error;
        }
      }
    );
  }

  onEmailInputFocus() {
    this.errorSession = false;
    this.errorMessage = "";
  }
}

import { ChangeDetectionStrategy, Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/api/auth.service';
import { NotificationsService } from '@/app/shared/services/utils/notifications.service';
import { JwtService } from '@/app/shared/services/utils/jwt.service';
import { ClsFormAuth } from './../../../core/classForm/cls-form-auth';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageComponent implements OnInit {
  //Iniciamos variables publicas
  public backgroundImage = 'assets/Inicio/Fondo.webp';
  public image = 'assets/Inicio/children.webp';
  public formLogin = new ClsFormAuth();
  public errorSession = false;
  public errorMessage = '';
  public showPassword = false;

  //Creamos el constructor
  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
    private notification: NotificationsService,
    private authService: AuthService,
    private jwtService: JwtService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formLogin.form.reset();
    this.preloadImages();
  }
  
  preloadImages() {
    this.addPreloadLink(this.backgroundImage);
    this.addPreloadLink(this.image);
  }
  
  addPreloadLink(imageUrl: string) {
    const link = this.renderer.createElement('link');
    this.renderer.setAttribute(link, 'rel', 'preload');
    this.renderer.setAttribute(link, 'as', 'image');
    this.renderer.setAttribute(link, 'href', imageUrl);
    
    const head = this.document.head;
    this.renderer.appendChild(head, link);
  }
  sendLogin() {
    if (this.formLogin.form.invalid) return;

    const { email, password } = this.formLogin.form.value;

    this.errorSession = false;
    this.errorMessage = '';

    this.authService.login(email, password).subscribe(
      (res) => {
        this.jwtService.setCookieAccess(res.token);
        this.formLogin.form.reset();
        this.router.navigate(['/']);
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
    this.errorMessage = '';
  }
}

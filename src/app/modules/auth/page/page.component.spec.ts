import { HttpClientTestingModule } from '@angular/common/http/testing'
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { PageComponent } from './page.component';
import { JwtService } from '@/app/shared/services/utils/jwt.service';
import { AuthService } from '@/app/shared/services/api/auth.service';
import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';
import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { NotificationsService } from '@/app/shared/services/utils/notifications.service';


describe('LoginComponent', () => {
    let component: PageComponent;
    let fixture: ComponentFixture<PageComponent>;
    let authService: AuthService; // Añade esta línea
    let jwtService: JwtService; // Añade esta línea
    let router: Router;
    let notification: NotificationsService;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule,
                RouterTestingModule,
                ReactiveFormsModule,
            ],
            declarations: [
                PageComponent],
            providers: [
                JwtService,
                AuthService,
                JwtHelperService, // Añade JwtHelperService como un proveedor
                { provide: JWT_OPTIONS, useValue: {} },
                NotificationsService
            ]
        }).compileComponents();

        authService = TestBed.inject(AuthService); // Inyecta AuthService
        jwtService = TestBed.inject(JwtService); // Inyecta JwtService
        router = TestBed.inject(Router);
        notification = TestBed.inject(NotificationsService);

        spyOn(jwtService, 'setCookieAccess'); // Espía solo
        spyOn(router, 'navigate'); // Espía solo


        fixture = TestBed.createComponent(PageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges()
    })


    it('✅ Se espera queel formulario sea invalido ', () => {
        //TODO: Arrange
        const mockCredenciales = {
            email: "21211",
            password: "lk"
        }
        const emailForm = component.formLogin.form.get('email')
        const passForm = component.formLogin.form.get('password')

        //TODO: ACT
        emailForm?.setValue(mockCredenciales.email)
        passForm?.setValue(mockCredenciales.password)

        //TODO: Assert
        expect(component.formLogin.form.invalid).toEqual(true)
    });


    it('✅ Se espera que las credenciales sean validas ', () => {
        //TODO: Arrange
        const mockCredenciales = {
            email: "admin@admin.com",
            password: "Admin123"
        }
        const emailForm = component.formLogin.form.get('email')
        const passForm = component.formLogin.form.get('password')

        //TODO: ACT
        emailForm?.setValue(mockCredenciales.email)
        passForm?.setValue(mockCredenciales.password)

        //TODO: Assert
        expect(component.formLogin.form.invalid).toEqual(false)
    });


    it('✅ Debería realizar el inicio de sesión con éxito', () => {
        // Crea un espía para el método login del servicio AuthService que retorna un token de éxito
        const successResponse = { token: 'fake_token' };
        const loginSpy = spyOn(authService, 'login').and.returnValue(of(successResponse)); // Espía y simula éxito

        // Configurar el formulario para que sea válido
        component.formLogin.form.setValue({
            email: 'test@example.com',
            password: 'password',
            showPassword: false
        });

        // Llamar al método real
        component.sendLogin();

        // Verificar que el método login se haya llamado con los parámetros correctos
        expect(loginSpy).toHaveBeenCalledWith('test@example.com', 'password');

        // Comprobar que se haya llamado a setCookieAccess y router.navigate
        expect(jwtService.setCookieAccess).toHaveBeenCalledWith('fake_token');
        expect(router.navigate).toHaveBeenCalledWith(['/']);

        // Verificar que no hay errores de sesión
        expect(component.errorSession).toBeFalsy();
        expect(component.errorMessage).toEqual('');
    });

    it('✅ Debería manejar un error de inicio de sesión', fakeAsync(() => {
        const errorResponse = { status: 0 , error: "Acceso  invalido"};

        spyOn(authService, 'login').and.returnValue(throwError(errorResponse));
        spyOn(notification, 'showError');
    
        component.formLogin.form.setValue({
          email: 'test@example.com',
          password: 'password',
          showPassword: false,
        });
    
        component.sendLogin();
        
        // Importante: Deja que las operaciones asíncronas se completen usando tick
        tick();
    
        // Verificar que el método login se haya llamado con los parámetros correctos
        expect(authService.login).toHaveBeenCalledWith('test@example.com', 'password');
    
        // Verificar el manejo de errores usando el espía de showError
        expect(notification.showError).toHaveBeenCalledWith(
          'Error',
          'Error de conexión con el servidor, inténtelo mas tarde'
        );
        

        // Verificar que se establezca error de sesión
        expect(component.errorSession).toEqual(false);
        expect(component.errorMessage).toEqual(''); // Esto debería coincidir con la propiedad 'error' del objeto de error simulado


      }));


    it('✅ El botón debería de tener la palabra "Iniciar sesión"', () => {
        const elementRef = fixture.debugElement.query(By.css('#Iniciar'))
        const getInnerText = elementRef.nativeElement.innerText

        expect(getInnerText).toEqual('Iniciar')

    })


    it('✅ Debería limpiar los mensajes de error en caso de error de sesión', () => {
        // Simular un error de sesión
        component.errorSession = true;
        component.errorMessage = 'Error de inicio de sesión';

        // Llamar al método
        component.onEmailInputFocus();

        // Verificar que los mensajes de error se limpien
        expect(component.errorSession).toEqual(false);
        expect(component.errorMessage).toEqual('');
    });

    it('✅ Debería agregar enlaces de precarga de imágenes', () => {
        // Espía la función addPreloadLink
        spyOn(component, 'addPreloadLink');

        // Llamar al método de precarga de imágenes
        component.preloadImages();

        // Verificar que la función addPreloadLink se haya llamado con las rutas de imágenes adecuadas
        expect(component.addPreloadLink).toHaveBeenCalledWith('assets/Inicio/Fondo.webp');
        expect(component.addPreloadLink).toHaveBeenCalledWith('assets/Inicio/children.webp');
    });

    it('✅ Debería crear enlaces de precarga correctamente', () => {
        const imageUrl = 'assets/Inicio/Fondo.webp';

        // Llamar al método para agregar un enlace de precarga
        component.addPreloadLink(imageUrl);

        // Obtener el elemento de enlace de precarga
        const linkElement = document.head.querySelector(`link[href="${imageUrl}"]`);

        // Verificar que el elemento de enlace se haya creado correctamente
        expect(linkElement).toBeTruthy();
        expect(linkElement?.getAttribute('rel')).toEqual('preload');
        expect(linkElement?.getAttribute('as')).toEqual('image');
        expect(linkElement?.getAttribute('href')).toEqual(imageUrl);
    });

});
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { PageComponent } from './page.component';
import { JwtService } from '@/app/shared/services/utils/jwt.service';
import { AuthService } from '@/app/shared/services/api/auth.service';
import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed } from '@angular/core/testing';


describe('LoginComponent', () => {
    let component: PageComponent;
    let fixture: ComponentFixture<PageComponent>;
    let authService: AuthService; // Añade esta línea
    let jwtService: JwtService; // Añade esta línea
    let router: Router;

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
                { provide: JWT_OPTIONS, useValue: {} }
            ]
        }).compileComponents();

        authService = TestBed.inject(AuthService); // Inyecta AuthService
        jwtService = TestBed.inject(JwtService); // Inyecta JwtService
        router = TestBed.inject(Router);

        spyOn(authService, 'login').and.returnValue(of({ token: 'fake_token' })); // Espía y simula
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


    it('❌ Se espera que las credenciales sean invalidas ', () => {
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


    it('✅ Se espera acceder de manera correcta al sistema', () => {
        // Configurar el formulario para que sea válido
        component.formLogin.form.setValue({
            email: 'byron.herrera@unl.edu.ec',
            password: 'Admin123',
            showPassword: false
        });

        // Llamar al método real
        component.sendLogin();

        // Comprobaciones
        expect(authService.login).toHaveBeenCalled();
        expect(jwtService.setCookieAccess).toHaveBeenCalledWith('fake_token');
        expect(router.navigate).toHaveBeenCalledWith(['/']);
    });

    it('✅ El botón debería de tener la palabra "Iniciar sesión"', () => {
        const elementRef = fixture.debugElement.query(By.css('#Iniciar'))
        const getInnerText = elementRef.nativeElement.innerText

        expect(getInnerText).toEqual('Iniciar')

    })


});
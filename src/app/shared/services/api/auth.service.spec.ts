import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from './auth.service';
import { JwtService } from '../utils/jwt.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';

describe('AuthService', () => {
    let service: AuthService;
    let httpMock: HttpTestingController;
    let cookieService: CookieService;
    let jwtService: JwtService;
    let router: Router;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule,
                RouterTestingModule],
            providers: [
                AuthService,
                CookieService,
                JwtService,
                JwtHelperService, // Agrega JwtHelperService como un proveedor
                { provide: JWT_OPTIONS, useValue: {} },
            ],
        });
        service = TestBed.inject(AuthService);
        httpMock = TestBed.inject(HttpTestingController);
        cookieService = TestBed.inject(CookieService);
        jwtService = TestBed.inject(JwtService);
        router = TestBed.inject(Router);
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('✅ debería crearse', () => {
        expect(service).toBeTruthy();
    });

    it('✅ debería llamar a login', () => {
        const email = 'test@example.com';
        const password = 'password';
        const mockResponse = { token: 'mock_token' };

        service.login(email, password).subscribe((response) => {
            expect(response).toEqual(mockResponse);
        });

        const req = httpMock.expectOne(`${environment.api}/api/1.0/auth/login`);
        expect(req.request.method).toBe('POST');
        expect(req.request.body).toEqual({ email, password });
        req.flush(mockResponse);
    });

    it('✅ debería llamar a logout', () => {
        spyOn(cookieService, 'deleteAll');
        spyOn(cookieService, 'delete');
        spyOn(window.sessionStorage, 'clear');
        spyOn(router, 'navigate');

        service.logout();

        expect(cookieService.deleteAll).toHaveBeenCalled();
        expect(cookieService.delete).toHaveBeenCalledWith('token', '/');
        expect(window.sessionStorage.clear).toHaveBeenCalled();
        expect(router.navigate).toHaveBeenCalledWith(['auth/login']);
    });

    it('✅ debería llamar a validateAddAdmin', () => {
        const body = { /* tus datos del cuerpo aquí */ };
        const mockResponse = { /* tus datos de respuesta simulada aquí */ };

        service.validateAddAdmin(body).subscribe((response) => {
            expect(response).toEqual(mockResponse);
        });

        const req = httpMock.expectOne(`${environment.api}/api/1.0/auth/validate`);
        expect(req.request.method).toBe('POST');
        expect(req.request.body).toEqual(body);
        req.flush(mockResponse);
    });

    it('✅ debería llamar a recoverPassword', () => {
        const body = { /* tus datos del cuerpo aquí */ };
        const mockResponse = { /* tus datos de respuesta simulada aquí */ };

        service.recoverPassword(body).subscribe((response) => {
            expect(response).toEqual(mockResponse);
        });

        const req = httpMock.expectOne(`${environment.api}/api/1.0/auth/recovery`);
        expect(req.request.method).toBe('POST');
        expect(req.request.body).toEqual(body);
        req.flush(mockResponse);
    });

    it('✅ debería llamar a validateCode', () => {
        const body = { /* tus datos del cuerpo aquí */ };
        const mockResponse = { /* tus datos de respuesta simulada aquí */ };

        service.validateCode(body).subscribe((response) => {
            expect(response).toEqual(mockResponse);
        });

        const req = httpMock.expectOne(`${environment.api}/api/1.0/auth/validate/recovery`);
        expect(req.request.method).toBe('POST');
        expect(req.request.body).toEqual(body);
        req.flush(mockResponse);
    });

    it('✅ debería llamar a changePassword', () => {
        const body = { /* tus datos del cuerpo aquí */ };
        const mockResponse = { /* tus datos de respuesta simulada aquí */ };

        service.changePassword(body).subscribe((response) => {
            expect(response).toEqual(mockResponse);
        });

        const req = httpMock.expectOne(`${environment.api}/api/1.0/auth/reset`);
        expect(req.request.method).toBe('POST');
        expect(req.request.body).toEqual(body);
        req.flush(mockResponse);
    });

    // Agrega más pruebas según sea necesario para otros métodos del servicio.
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RecoveryComponent } from './recovery.component';
import { AuthService } from '@/app/shared/services/api/auth.service';
import { NotificationsService } from '@/app/shared/services/utils/notifications.service';
import { of, throwError } from 'rxjs';
import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';
import { JwtService } from '@/app/shared/services/utils/jwt.service';
import { Router } from '@angular/router';

describe('RecoveryComponent', () => {
    let component: RecoveryComponent;
    let fixture: ComponentFixture<RecoveryComponent>;
    let authService: AuthService;
    let notificationService: NotificationsService;
    let jwtService: JwtService; // Añade esta línea
    let router: Router;
    let notification: NotificationsService;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                ReactiveFormsModule,
                RouterTestingModule,
                HttpClientTestingModule,
            ],
            declarations: [RecoveryComponent],
            providers: [
                JwtService,
                AuthService,
                NotificationsService,
                { provide: JWT_OPTIONS, useValue: {} },
                JwtHelperService, // Agrega JwtHelperService como un proveedor
            ],

        }).compileComponents();

        authService = TestBed.inject(AuthService);
        jwtService = TestBed.inject(JwtService); // Inyecta JwtService
        router = TestBed.inject(Router);
        notificationService = TestBed.inject(NotificationsService);

        fixture = TestBed.createComponent(RecoveryComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create the RecoveryComponent', () => {
        expect(component).toBeTruthy();
    });

    it('should send recovery request successfully', () => {
        spyOn(authService, 'recoverPassword').and.returnValue(
            of({ message: 'Recovery email sent successfully' })
        );

        component.recoverForm.setValue({ email: 'test@example.com' });
        component.sendRecover();

        expect(authService.recoverPassword).toHaveBeenCalledWith({
            email: 'test@example.com',
        });
        expect(component.emailSent).toBeTrue();
        expect(component.codeSent).toBeTrue();
    });

    it('should handle recovery request error', () => {
        spyOn(authService, 'recoverPassword').and.returnValue(
            throwError({ status: 0 })
        );
        spyOn(notificationService, 'showError');

        component.recoverForm.setValue({ email: 'test@example.com' });
        component.sendRecover();

        expect(authService.recoverPassword).toHaveBeenCalledWith({
            email: 'test@example.com',
        });
        expect(notificationService.showError).toHaveBeenCalledWith(
            'Error',
            'Error de conexión con el servidor, inténtelo mas tarde'
        );
        expect(component.emailSent).toBeFalse();
        expect(component.codeSent).toBeFalse();
        expect(component.error).toBeFalse();
    });

    // Add more test cases for other component methods as needed
});

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { UserService } from './user.service';
import { environment } from 'src/environments/environment';

describe('UserService', () => {
    let service: UserService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [UserService],
        });
        service = TestBed.inject(UserService);
        httpMock = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('✅ debería crearse', () => {
        expect(service).toBeTruthy();
    });

    it('✅ debería llamar a createUser', () => {
        const testData: any = { /* tus datos de usuario aquí */ };
        service.createUser(testData).subscribe(() => {});

        const req = httpMock.expectOne(`${environment.api}/api/1.0/user`);
        expect(req.request.method).toBe('POST');
        expect(req.request.body).toEqual(testData);
    });

    it('✅ debería llamar a updateUser', () => {
        const id: any = 'tu_id_aquí';
        const testData: any = { /* tus datos de usuario actualizados aquí */ };
        service.updateUser(id, testData).subscribe(() => {});

        const req = httpMock.expectOne(`${environment.api}/api/1.0/user/${id}`);
        expect(req.request.method).toBe('PUT');
        expect(req.request.body).toEqual(testData);
    });

    it('✅ debería llamar a changePasswordUser', () => {
        const id: any = 'tu_id_aquí';
        service.changePasswordUser(id).subscribe(() => {});

        const req = httpMock.expectOne(`${environment.api}/api/1.0/user/pass`);
        expect(req.request.method).toBe('POST');
        expect(req.request.body).toEqual(id);
    });

    it('✅ debería llamar a getAllUser', () => {
        service.getAllUser().subscribe(() => {});

        const req = httpMock.expectOne(`${environment.api}/api/1.0/user`);
        expect(req.request.method).toBe('GET');
    });

    it('✅ debería llamar a getUser', () => {
        const id: any = 'tu_id_aquí';
        service.getUser(id).subscribe(() => {});

        const req = httpMock.expectOne(`${environment.api}/api/1.0/user/${id}`);
        expect(req.request.method).toBe('GET');
    });

    it('✅ debería llamar a changedStatusUser', () => {
        const id: any = 'tu_id_aquí';
        const action: boolean = true; // Cambia esto según tu caso
        service.changedStatusUser(id, action).subscribe(() => {});

        const req = httpMock.expectOne(`${environment.api}/api/1.0/user/status`);
        expect(req.request.method).toBe('POST');
        expect(req.request.body).toEqual({ id, action });
    });

    it('✅ debería llamar a deleteUser', () => {
        const id: any = 'tu_id_aquí';
        service.deleteUser(id).subscribe(() => {});

        const req = httpMock.expectOne(`${environment.api}/api/1.0/user/${id}`);
        expect(req.request.method).toBe('DELETE');
    });
});

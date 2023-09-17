import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { TestDocenteService } from './test-docente.service';
import { environment } from 'src/environments/environment';

describe('TestDocenteService', () => {
    let service: TestDocenteService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [TestDocenteService],
        });
        service = TestBed.inject(TestDocenteService);
        httpMock = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('✅ debería crearse', () => {
        expect(service).toBeTruthy();
    });

    it('✅ debería llamar a create', () => {
        const testData: any = { /* tus datos de prueba aquí */ };
        service.create(testData).subscribe(() => {});

        const req = httpMock.expectOne(`${environment.api}/api/1.0/testTeacher`);
        expect(req.request.method).toBe('POST');
        expect(req.request.body).toEqual(testData);
    });

    it('✅ debería llamar a getAll', () => {
        const id: any = 'tu_id_aquí';
        service.getAll(id).subscribe(() => {});

        const req = httpMock.expectOne(`${environment.api}/api/1.0/testTeacher/teacher/${id}`);
        expect(req.request.method).toBe('GET');
    });

    it('✅ debería llamar a getTestTeacher', () => {
        const id: any = 'tu_id_aquí';
        service.getTestTeacher(id).subscribe(() => {});

        const req = httpMock.expectOne(`${environment.api}/api/1.0/testTeacher/${id}`);
        expect(req.request.method).toBe('GET');
    });

    it('✅ debería llamar a update', () => {
        const id: any = 'tu_id_aquí';
        const testData: any = { /* tus datos de prueba actualizados aquí */ };
        service.update(id, testData).subscribe(() => {});

        const req = httpMock.expectOne(`${environment.api}/api/1.0/testTeacher/${id}`);
        expect(req.request.method).toBe('PUT');
        expect(req.request.body).toEqual(testData);
    });

    it('✅ debería llamar a delete', () => {
        const id: any = 'tu_id_aquí';
        const testData: any = { /* tus datos de prueba aquí */ };
        service.delete(id, testData).subscribe(() => {});

        const req = httpMock.expectOne(`${environment.api}/api/1.0/testTeacher/${id}`);
        expect(req.request.method).toBe('DELETE');
    });
});

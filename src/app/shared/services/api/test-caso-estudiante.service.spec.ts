import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { TestCasoEstudianteService } from './test-caso-estudiante.service';
import { environment } from 'src/environments/environment';

describe('TestCasoEstudianteService', () => {
    let service: TestCasoEstudianteService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [TestCasoEstudianteService],
        });
        service = TestBed.inject(TestCasoEstudianteService);
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

        const req = httpMock.expectOne(`${environment.api}/api/1.0/testStudent`);
        expect(req.request.method).toBe('POST');
        expect(req.request.body).toEqual(testData);
    });

    it('✅ debería llamar a getAll', () => {
        const id: any = 'tu_id_aquí';
        service.getAll(id).subscribe(() => {});

        const req = httpMock.expectOne(`${environment.api}/api/1.0/testStudent/student/${id}`);
        expect(req.request.method).toBe('GET');
    });

    it('✅ debería llamar a getTestStudent', () => {
        const id: any = 'tu_id_aquí';
        service.getTestStudent(id).subscribe(() => {});

        const req = httpMock.expectOne(`${environment.api}/api/1.0/testStudent/${id}`);
        expect(req.request.method).toBe('GET');
    });

    it('✅ debería llamar a getTestStudentReporte', () => {
        const id: any = 'tu_id_aquí';
        service.getTestStudentReporte(id).subscribe(() => {});

        const req = httpMock.expectOne(`${environment.api}/api/1.0/testStudent/reporte/${id}`);
        expect(req.request.method).toBe('GET');
    });

    it('✅ debería llamar a update', () => {
        const id: any = 'tu_id_aquí';
        const testData: any = { /* tus datos de prueba actualizados aquí */ };
        service.update(id, testData).subscribe(() => {});

        const req = httpMock.expectOne(`${environment.api}/api/1.0/testStudent/${id}`);
        expect(req.request.method).toBe('PUT');
        expect(req.request.body).toEqual(testData);
    });

    it('✅ debería llamar a updateScore', () => {
        const id: any = 'tu_id_aquí';
        const scoreData: any = { /* tus datos de puntuación aquí */ };
        service.updateScore(id, scoreData).subscribe(() => {});

        const req = httpMock.expectOne(`${environment.api}/api/1.0/testStudent/score/${id}`);
        expect(req.request.method).toBe('PUT');
        expect(req.request.body).toEqual(scoreData);
    });

    it('✅ debería llamar a delete', () => {
        const id: any = 'tu_id_aquí';
        const testData: any = { /* tus datos de prueba aquí */ };
        service.delete(id, testData).subscribe(() => {});

        const req = httpMock.expectOne(`${environment.api}/api/1.0/testStudent/${id}`);
        expect(req.request.method).toBe('DELETE');
    });
});

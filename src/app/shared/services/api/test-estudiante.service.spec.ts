import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { TestEstudianteService } from './test-estudiante.service';
import { environment } from 'src/environments/environment';

describe('TestEstudianteService', () => {
    let service: TestEstudianteService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [TestEstudianteService],
        });
        service = TestBed.inject(TestEstudianteService);
        httpMock = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('✅ debería crearse', () => {
        expect(service).toBeTruthy();
    });

    it('✅ debería llamar a createPregunta', () => {
        const testData: FormData = new FormData();
        // Agrega los datos a tu FormData aquí
        service.createPregunta(testData).subscribe(() => {});

        const req = httpMock.expectOne(`${environment.api}/api/1.0/testImages`);
        expect(req.request.method).toBe('POST');
        expect(req.request.body).toEqual(testData);
    });

    it('✅ debería llamar a getAllPregunta', () => {
        service.getAllPregunta().subscribe(() => {});

        const req = httpMock.expectOne(`${environment.api}/api/1.0/testImages`);
        expect(req.request.method).toBe('GET');
    });

    it('✅ debería llamar a getAllPreguntaPaginated', () => {
        service.getAllPreguntaPaginated().subscribe(() => {});

        const req = httpMock.expectOne(`${environment.api}/api/1.0/testImages/paginated`);
        expect(req.request.method).toBe('GET');
    });

    it('✅ debería llamar a getPregunta', () => {
        const id: any = 'tu_id_aquí';
        service.getPregunta(id).subscribe(() => {});

        const req = httpMock.expectOne(`${environment.api}/api/1.0/testImages/${id}`);
        expect(req.request.method).toBe('GET');
    });

    it('✅ debería llamar a updatePregunta', () => {
        const id: any = 'tu_id_aquí';
        const testData: FormData = new FormData();
        // Agrega los datos actualizados a tu FormData aquí
        service.updatePregunta(id, testData).subscribe(() => {});

        const req = httpMock.expectOne(`${environment.api}/api/1.0/testImages/${id}`);
        expect(req.request.method).toBe('PUT');
        expect(req.request.body).toEqual(testData);
    });

    it('✅ debería llamar a deletePregunta', () => {
        const id: any = 'tu_id_aquí';
        const testData: any = { /* tus datos de prueba aquí */ };
        service.deletePregunta(id, testData).subscribe(() => {});

        const req = httpMock.expectOne(`${environment.api}/api/1.0/testImages/${id}`);
        expect(req.request.method).toBe('DELETE');
    });
});

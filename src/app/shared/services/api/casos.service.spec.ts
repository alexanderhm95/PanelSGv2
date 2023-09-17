import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { CasosService } from './casos.service';
import { environment } from 'src/environments/environment';
import { ApiResponse } from '@/app/core/interfaces/interface-response';

describe('CasosService', () => {
    let service: CasosService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [CasosService],
        });
        service = TestBed.inject(CasosService);
        httpMock = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('✅ debería crearse', () => {
        expect(service).toBeTruthy();
    });

    it('✅ debería llamar a createCaso', () => {
        const casoData = { /* tus datos de caso aquí */ };
        const mockResponse: ApiResponse = { /* tus datos de respuesta simulada aquí */ };

        service.createCaso(casoData).subscribe((response) => {
            expect(response).toEqual(mockResponse);
        });

        const req = httpMock.expectOne(`${environment.api}/api/1.0/caso`);
        expect(req.request.method).toBe('POST');
        expect(req.request.body).toEqual(casoData);
        req.flush(mockResponse);
    });

    it('✅ debería llamar a getAllCaso', () => {
        const id = 'tu_id_aquí';
        const mockResponse: ApiResponse = { /* tus datos de respuesta simulada aquí */ };

        service.getAllCaso(id).subscribe((response) => {
            expect(response).toEqual(mockResponse);
        });

        const req = httpMock.expectOne(`${environment.api}/api/1.0/caso/casos/${id}`);
        expect(req.request.method).toBe('GET');
        req.flush(mockResponse);
    });

    it('✅ debería llamar a getAllCasosTeacher', () => {
        const id = 'tu_id_aquí';
        const mockResponse: ApiResponse = { /* tus datos de respuesta simulada aquí */ };

        service.getAllCasosTeacher(id).subscribe((response) => {
            expect(response).toEqual(mockResponse);
        });

        const req = httpMock.expectOne(`${environment.api}/api/1.0/caso/teacher/${id}`);
        expect(req.request.method).toBe('GET');
        req.flush(mockResponse);
    });

    it('✅ debería llamar a createTestTeacher', () => {
        const testData = { /* tus datos de prueba aquí */ };
        const mockResponse: ApiResponse = { /* tus datos de respuesta simulada aquí */ };

        service.createTestTeacher(testData).subscribe((response) => {
            expect(response).toEqual(mockResponse);
        });

        const req = httpMock.expectOne(`${environment.api}/api/1.0/caso/test/teacher`);
        expect(req.request.method).toBe('POST');
        expect(req.request.body).toEqual(testData);
        req.flush(mockResponse);
    });

    it('✅ debería llamar a getCaso', () => {
        const id = 'tu_id_aquí';
        const mockResponse: ApiResponse = { /* tus datos de respuesta simulada aquí */ };

        service.getCaso(id).subscribe((response) => {
            expect(response).toEqual(mockResponse);
        });

        const req = httpMock.expectOne(`${environment.api}/api/1.0/caso/${id}`);
        expect(req.request.method).toBe('GET');
        req.flush(mockResponse);
    });

    it('✅ debería llamar a getReporte', () => {
        const id = 'tu_id_aquí';
        const mockResponse: ApiResponse = { /* tus datos de respuesta simulada aquí */ };

        service.getReporte(id).subscribe((response) => {
            expect(response).toEqual(mockResponse);
        });

        const req = httpMock.expectOne(`${environment.api}/api/1.0/caso/reporte/${id}`);
        expect(req.request.method).toBe('GET');
        req.flush(mockResponse);
    });

    it('✅ debería llamar a updateCaso', () => {
        const id = 'tu_id_aquí';
        const casoData = { /* tus datos de caso actualizados aquí */ };
        const mockResponse: ApiResponse = { /* tus datos de respuesta simulada aquí */ };

        service.updateCaso(id, casoData).subscribe((response) => {
            expect(response).toEqual(mockResponse);
        });

        const req = httpMock.expectOne(`${environment.api}/api/1.0/caso/${id}`);
        expect(req.request.method).toBe('PUT');
        expect(req.request.body).toEqual(casoData);
        req.flush(mockResponse);
    });

    it('✅ debería llamar a deleteCaso', () => {
        const id = 'tu_id_aquí';
        const deleteData = { nombre:"pruebas" };
        const mockResponse: ApiResponse = { /* tus datos de respuesta simulada aquí */ };

        service.deleteCaso(id, deleteData).subscribe((response) => {
            expect(response).toEqual(mockResponse);
        });

        const req = httpMock.expectOne({
            method: 'DELETE',
            url: `${environment.api}/api/1.0/caso/${id}`,
        });
        expect(req.request.method).toBe('DELETE');
        req.flush(mockResponse);
    });
});

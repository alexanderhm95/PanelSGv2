import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { InstitutionService } from './institution.service';
import { environment } from 'src/environments/environment';
import { ApiResponse } from '@/app/core/interfaces/interface-response';
import { InterfaceInstitution } from '@/app/core/interfaces/interface-institution';

describe('InstitutionService', () => {
    let service: InstitutionService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [InstitutionService],
        });
        service = TestBed.inject(InstitutionService);
        httpMock = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('✅ debería crearse', () => {
        expect(service).toBeTruthy();
    });

    it('✅ debería llamar a createInstitution', () => {
        const institutionData: any = { /* tus datos de institución aquí */ };
        const mockResponse: ApiResponse = { /* tus datos de respuesta simulada aquí */ };

        service.createInstitution(institutionData).subscribe((response) => {
            expect(response).toEqual(mockResponse);
        });

        const req = httpMock.expectOne(`${environment.api}/api/1.0/institution`);
        expect(req.request.method).toBe('POST');
        expect(req.request.body).toEqual(institutionData);
        req.flush(mockResponse);
    });

    it('✅ debería llamar a getAllInstitution', () => {
        const mockResponse: ApiResponse = { /* tus datos de respuesta simulada aquí */ };

        service.getAllInstitution().subscribe((response) => {
            expect(response).toEqual(mockResponse);
        });

        const req = httpMock.expectOne(`${environment.api}/api/1.0/institution`);
        expect(req.request.method).toBe('GET');
        req.flush(mockResponse);
    });

    it('✅ debería llamar a getInstitution', () => {
        const id = 'tu_id_aquí';
        const mockResponse: ApiResponse = { /* tus datos de respuesta simulada aquí */ };

        service.getInstitution(id).subscribe((response) => {
            expect(response).toEqual(mockResponse);
        });

        const req = httpMock.expectOne(`${environment.api}/api/1.0/institution/${id}`);
        expect(req.request.method).toBe('GET');
        req.flush(mockResponse);
    });

    it('✅ debería llamar a updateInstitution', () => {
        const id = 'tu_id_aquí';
        const institutionData: any = { /* tus datos de institución actualizados aquí */ };
        const mockResponse: ApiResponse = { /* tus datos de respuesta simulada aquí */ };

        service.updateInstitution(id, institutionData).subscribe((response) => {
            expect(response).toEqual(mockResponse);
        });

        const req = httpMock.expectOne(`${environment.api}/api/1.0/institution/${id}`);
        expect(req.request.method).toBe('PUT');
        expect(req.request.body).toEqual(institutionData);
        req.flush(mockResponse);
    });

    it('✅ debería llamar a deleteInstitution', () => {
        const id = 'tu_id_aquí';
        const mockResponse: ApiResponse = { /* tus datos de respuesta simulada aquí */ };

        service.deleteInstitution(id).subscribe((response) => {
            expect(response).toEqual(mockResponse);
        });

        const req = httpMock.expectOne(`${environment.api}/api/1.0/institution/${id}`);
        expect(req.request.method).toBe('DELETE');
        req.flush(mockResponse);
    });
});

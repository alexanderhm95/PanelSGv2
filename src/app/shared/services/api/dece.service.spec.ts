import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { DeceService } from './dece.service';
import { environment } from 'src/environments/environment';
import { ApiResponse } from '@/app/core/interfaces/interface-response';
import { InterfaceDece } from '@/app/core/interfaces/interface-dece';

describe('DeceService', () => {
    let service: DeceService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [DeceService],
        });
        service = TestBed.inject(DeceService);
        httpMock = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('✅ debería crearse', () => {
        expect(service).toBeTruthy();
    });

    it('✅ debería llamar a createDece', () => {
        const deceData: InterfaceDece = {
            CI: "",
            name: "",
            lastName: "",
            address: "",
            phone: "",
            email: "",
            nameInstitution: "",
        };
        const mockResponse: ApiResponse = { /* tus datos de respuesta simulada aquí */ };

        service.createDece(deceData).subscribe((response) => {
            expect(response).toEqual(mockResponse);
        });

        const req = httpMock.expectOne(`${environment.api}/api/1.0/dece`);
        expect(req.request.method).toBe('POST');
        expect(req.request.body).toEqual(deceData);
        req.flush(mockResponse);
    });

    it('✅ debería llamar a getAllDece', () => {
        const mockResponse: ApiResponse = { /* tus datos de respuesta simulada aquí */ };

        service.getAllDece().subscribe((response) => {
            expect(response).toEqual(mockResponse);
        });

        const req = httpMock.expectOne(`${environment.api}/api/1.0/dece`);
        expect(req.request.method).toBe('GET');
        req.flush(mockResponse);
    });

    it('✅ debería llamar a getDece', () => {
        const id = 'tu_id_aquí';
        const mockResponse: ApiResponse = { /* tus datos de respuesta simulada aquí */ };

        service.getDece(id).subscribe((response) => {
            expect(response).toEqual(mockResponse);
        });

        const req = httpMock.expectOne(`${environment.api}/api/1.0/dece/${id}`);
        expect(req.request.method).toBe('GET');
        req.flush(mockResponse);
    });

    it('✅ debería llamar a updateDece', () => {
        const id = 'tu_id_aquí';
        const deceData: InterfaceDece = {
            CI: "",
            name: "",
            lastName: "",
            address: "",
            phone: "",
            email: "",
            nameInstitution: "",
        };
        const mockResponse: ApiResponse = { /* tus datos de respuesta simulada aquí */ };

        service.updateDece(id, deceData).subscribe((response) => {
            expect(response).toEqual(mockResponse);
        });

        const req = httpMock.expectOne(`${environment.api}/api/1.0/dece/${id}`);
        expect(req.request.method).toBe('PUT');
        expect(req.request.body).toEqual(deceData);
        req.flush(mockResponse);
    });

    it('✅ debería llamar a deleteDece', () => {
        const id = 'tu_id_aquí';
        const mockResponse: ApiResponse = { /* tus datos de respuesta simulada aquí */ };

        service.deleteDece(id).subscribe((response) => {
            expect(response).toEqual(mockResponse);
        });

        const req = httpMock.expectOne(`${environment.api}/api/1.0/dece/${id}`);
        expect(req.request.method).toBe('DELETE');
        req.flush(mockResponse);
    });
});

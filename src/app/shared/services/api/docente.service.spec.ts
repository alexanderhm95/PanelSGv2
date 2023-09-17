import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { DocenteService } from './docente.service';
import { environment } from 'src/environments/environment';
import { ApiResponse } from '@/app/core/interfaces/interface-response';
import { EvaluatorRole } from '@/app/core/interfaces/interface-roleEvaluator';

describe('DocenteService', () => {
    let service: DocenteService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [DocenteService],
        });
        service = TestBed.inject(DocenteService);
        httpMock = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('✅ debería crearse', () => {
        expect(service).toBeTruthy();
    });

    it('✅ debería llamar a createTeacher', () => {
        const teacherData: any = { /* tus datos de docente aquí */ };
        const mockResponse: ApiResponse = { /* tus datos de respuesta simulada aquí */ };

        service.createTeacher(teacherData).subscribe((response) => {
            expect(response).toEqual(mockResponse);
        });

        const req = httpMock.expectOne(`${environment.api}/api/1.0/teacher`);
        expect(req.request.method).toBe('POST');
        expect(req.request.body).toEqual(teacherData);
        req.flush(mockResponse);
    });

    it('✅ debería llamar a getAllTeacher', () => {
        const mockResponse: ApiResponse = { /* tus datos de respuesta simulada aquí */ };

        service.getAllTeacher().subscribe((response) => {
            expect(response).toEqual(mockResponse);
        });

        const req = httpMock.expectOne(`${environment.api}/api/1.0/teacher`);
        expect(req.request.method).toBe('GET');
        req.flush(mockResponse);
    });

    it('✅ debería llamar a getTeachersInstitutions', () => {
        const data: any = { /* tus datos aquí */ };
        const mockResponse: ApiResponse = { /* tus datos de respuesta simulada aquí */ };

        service.getTeachersInstitutions(data).subscribe((response) => {
            expect(response).toEqual(mockResponse);
        });

        const req = httpMock.expectOne(`${environment.api}/api/1.0/teacher/casos`);
        expect(req.request.method).toBe('POST');
        expect(req.request.body).toEqual(data);
        req.flush(mockResponse);
    });

    it('✅ debería llamar a getTeacher', () => {
        const id = 'tu_id_aquí';
        const mockResponse: ApiResponse = { /* tus datos de respuesta simulada aquí */ };

        service.getTeacher(id).subscribe((response) => {
            expect(response).toEqual(mockResponse);
        });

        const req = httpMock.expectOne(`${environment.api}/api/1.0/teacher/${id}`);
        expect(req.request.method).toBe('GET');
        req.flush(mockResponse);
    });

    it('✅ debería llamar a updateTeacher', () => {
        const id = 'tu_id_aquí';
        const teacherData: any = { /* tus datos de docente actualizados aquí */ };
        const mockResponse: ApiResponse = { /* tus datos de respuesta simulada aquí */ };

        service.updateTeacher(id, teacherData).subscribe((response) => {
            expect(response).toEqual(mockResponse);
        });

        const req = httpMock.expectOne(`${environment.api}/api/1.0/teacher/${id}`);
        expect(req.request.method).toBe('PUT');
        expect(req.request.body).toEqual(teacherData);
        req.flush(mockResponse);
    });

    it('✅ debería llamar a deleteTeacher', () => {
        const id = 'tu_id_aquí';
        const mockResponse: ApiResponse = { data:"",message:"" };

        service.deleteTeacher(id).subscribe((response) => {
            expect(response).toEqual(mockResponse);
        });

        const req = httpMock.expectOne(`${environment.api}/api/1.0/teacher/${id}`);
        expect(req.request.method).toBe('DELETE');
        req.flush(mockResponse);
    });
});

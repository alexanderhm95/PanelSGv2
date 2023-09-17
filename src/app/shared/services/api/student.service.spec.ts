import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { StudentService } from './student.service';
import { environment } from 'src/environments/environment';

describe('StudentService', () => {
    let service: StudentService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [StudentService],
        });
        service = TestBed.inject(StudentService);
        httpMock = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('✅ debería crearse', () => {
        expect(service).toBeTruthy();
    });

    it('✅ debería llamar a createStudent', () => {
        const studentData: any = { /* tus datos de estudiante aquí */ };
        service.createStudent(studentData).subscribe(() => {});

        const req = httpMock.expectOne(`${environment.api}/api/1.0/student`);
        expect(req.request.method).toBe('POST');
        expect(req.request.body).toEqual(studentData);
    });

    it('✅ debería llamar a generateCode', () => {
        const CI: any = { /* tu número de CI aquí */ };
        service.generateCode(CI).subscribe(() => {});

        const req = httpMock.expectOne(`${environment.api}/api/1.0/student/generate`);
        expect(req.request.method).toBe('POST');
        expect(req.request.body).toEqual(CI);
    });

    it('✅ debería llamar a getAllStudent', () => {
        service.getAllStudent().subscribe(() => {});

        const req = httpMock.expectOne(`${environment.api}/api/1.0/student`);
        expect(req.request.method).toBe('GET');
    });

    it('✅ debería llamar a getStudent', () => {
        const id = 'tu_id_aquí';
        service.getStudent(id).subscribe(() => {});

        const req = httpMock.expectOne(`${environment.api}/api/1.0/student/${id}`);
        expect(req.request.method).toBe('GET');
    });

    it('✅ debería llamar a updateStudent', () => {
        const id = 'tu_id_aquí';
        const studentData: any = { /* tus datos de estudiante actualizados aquí */ };
        service.updateStudent(id, studentData).subscribe(() => {});

        const req = httpMock.expectOne(`${environment.api}/api/1.0/student/${id}`);
        expect(req.request.method).toBe('PUT');
        expect(req.request.body).toEqual(studentData);
    });

    it('✅ debería llamar a deleteStudent', () => {
        const id = 'tu_id_aquí';
        service.deleteStudent(id).subscribe(() => {});

        const req = httpMock.expectOne(`${environment.api}/api/1.0/student/${id}`);
        expect(req.request.method).toBe('DELETE');
    });
});

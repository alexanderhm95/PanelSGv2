import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { TestQuestionService } from './test-question.service';
import { environment } from 'src/environments/environment';

describe('TestQuestionService', () => {
    let service: TestQuestionService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [TestQuestionService],
        });
        service = TestBed.inject(TestQuestionService);
        httpMock = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('✅ debería crearse', () => {
        expect(service).toBeTruthy();
    });

    it('✅ debería llamar a createQuestion', () => {
        const testData: any = { /* tus datos de pregunta aquí */ };
        service.createQuestion(testData).subscribe(() => {});

        const req = httpMock.expectOne(`${environment.api}/api/1.0/testQuestion`);
        expect(req.request.method).toBe('POST');
        expect(req.request.body).toEqual(testData);
    });

    it('✅ debería llamar a getAllQuestion', () => {
        service.getAllQuestion().subscribe(() => {});

        const req = httpMock.expectOne(`${environment.api}/api/1.0/testQuestion`);
        expect(req.request.method).toBe('GET');
    });

    it('✅ debería llamar a getQuestion', () => {
        const id: any = 'tu_id_aquí';
        service.getQuestion(id).subscribe(() => {});

        const req = httpMock.expectOne(`${environment.api}/api/1.0/testQuestion/${id}`);
        expect(req.request.method).toBe('GET');
    });

    it('✅ debería llamar a updateQuestion', () => {
        const id: any = 'tu_id_aquí';
        const testData: any = { /* tus datos de pregunta actualizados aquí */ };
        service.updateQuestion(id, testData).subscribe(() => {});

        const req = httpMock.expectOne(`${environment.api}/api/1.0/testQuestion/${id}`);
        expect(req.request.method).toBe('PUT');
        expect(req.request.body).toEqual(testData);
    });

    it('✅ debería llamar a deleteQuestion', () => {
        const id: any = 'tu_id_aquí';
        const testData: any = { /* tus datos de prueba aquí */ };
        service.deleteQuestion(id, testData).subscribe(() => {});

        const req = httpMock.expectOne(`${environment.api}/api/1.0/testQuestion/${id}`);
        expect(req.request.method).toBe('DELETE');
    });
});

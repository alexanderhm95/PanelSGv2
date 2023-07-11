import { environment } from '@/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TestCasoEstudianteService {
  private readonly URL = environment.api + '/api/1.0';

  constructor(private http: HttpClient) {}

  create(body: any): Observable<any> {
    return this.http.post(`${this.URL}/testStudent`, body);
  }

  getAll(): Observable<any> {
    return this.http.get(`${this.URL}/testStudent`);
  }
  getTestStudent(id: any): Observable<any> {
    return this.http.get(`${this.URL}/testStudent/${id}`);
  }

  getTestStudentReporte(id: any): Observable<Blob> {
    return this.http.get<Blob>(`${this.URL}/testStudent/reporte/${id}`);
  }

  update(id: any, body: any): Observable<any> {
    return this.http.put(`${this.URL}/testStudent/${id}`, body);
  }

  updateScore(id: any, body: any): Observable<any> {
    return this.http.put(`${this.URL}/testStudent/score/${id}`, body);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${this.URL}/testStudent/${id}`);
  }
}

import { TestBed } from '@angular/core/testing';

import { TestCasoEstudianteService } from './test-caso-estudiante.service';

describe('TestCasoEstudianteService', () => {
  let service: TestCasoEstudianteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestCasoEstudianteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

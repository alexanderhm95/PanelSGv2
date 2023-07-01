import { TestBed } from '@angular/core/testing';

import { InjectSessionInterceptorInterceptor } from './inject-session.interceptor.interceptor';

describe('InjectSessionInterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      InjectSessionInterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: InjectSessionInterceptorInterceptor = TestBed.inject(InjectSessionInterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});

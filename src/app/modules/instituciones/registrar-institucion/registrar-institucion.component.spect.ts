import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarInstitucionComponent } from './registrar-institucion.component';

describe('RegistrarInstitucionComponent', () => {
  let component: RegistrarInstitucionComponent;
  let fixture: ComponentFixture<RegistrarInstitucionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarInstitucionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarInstitucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarInstitucionComponent } from './listar-institucion.component';

describe('ListarInstitucionComponent', () => {
  let component: ListarInstitucionComponent;
  let fixture: ComponentFixture<ListarInstitucionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarInstitucionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarInstitucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

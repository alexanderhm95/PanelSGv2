import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarInstitucionComponent } from './registrar-institucion.component';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';


describe('RegistrarInstitucionComponent', () => {
  let component: RegistrarInstitucionComponent;
  let fixture: ComponentFixture<RegistrarInstitucionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule, ReactiveFormsModule],
      declarations: [RegistrarInstitucionComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(RegistrarInstitucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarInstitucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges()
  })

  it('❌ El formulario debería ser inválido si todos los campos están vacíos o contienen datos inválidos', () => {
    // Arrange
    const mockInstitucion = {
      nameInstitution: "",
      addressInstitution: "",
      phoneInstitution: "",
      emailInstitution: "",
      typeInstitution: "",
      stateInstitution: "",
      cityInstitution: ""
    };

    // Enlaza las variables con los campos del formulario
    const nameInstitutionForm = component.formInstitucion.form.get('nameInstitution');
    const addressInstitutionForm = component.formInstitucion.form.get('addressInstitution');
    const phoneInstitutionForm = component.formInstitucion.form.get('phoneInstitution');
    const emailInstitutionForm = component.formInstitucion.form.get('emailInstitution');
    const typeInstitutionForm = component.formInstitucion.form.get('typeInstitution');
    const stateInstitutionForm = component.formInstitucion.form.get('stateInstitution');
    const cityInstitutionForm = component.formInstitucion.form.get('cityInstitution');

    // Act
    nameInstitutionForm?.setValue(mockInstitucion.nameInstitution);
    addressInstitutionForm?.setValue(mockInstitucion.addressInstitution);
    phoneInstitutionForm?.setValue(mockInstitucion.phoneInstitution);
    emailInstitutionForm?.setValue(mockInstitucion.emailInstitution);
    typeInstitutionForm?.setValue(mockInstitucion.typeInstitution);
    stateInstitutionForm?.setValue(mockInstitucion.stateInstitution);
    cityInstitutionForm?.setValue(mockInstitucion.cityInstitution);

    // Assert
    expect(component.formInstitucion.form.invalid).toEqual(true);
  });


  it('✅ El formulario debería ser valido si todos los campos están llenos y contienen datos válidos', () => {
    // Arrange
    const mockInstitucion = {
      nameInstitution: "Eliseo ",
      addressInstitution: "Loja ",
      phoneInstitution: "123456",
      emailInstitution: "eliseo@eliseo.com",
      typeInstitution: "Public",
      stateInstitution: "Loja",
      cityInstitution: "Loja"
    };

    // Enlaza las variables con los campos del formulario
    const nameInstitutionForm = component.formInstitucion.form.get('nameInstitution');
    const addressInstitutionForm = component.formInstitucion.form.get('addressInstitution');
    const phoneInstitutionForm = component.formInstitucion.form.get('phoneInstitution');
    const emailInstitutionForm = component.formInstitucion.form.get('emailInstitution');
    const typeInstitutionForm = component.formInstitucion.form.get('typeInstitution');
    const stateInstitutionForm = component.formInstitucion.form.get('stateInstitution');
    const cityInstitutionForm = component.formInstitucion.form.get('cityInstitution');

    // Act
    nameInstitutionForm?.setValue(mockInstitucion.nameInstitution);
    addressInstitutionForm?.setValue(mockInstitucion.addressInstitution);
    phoneInstitutionForm?.setValue(mockInstitucion.phoneInstitution);
    emailInstitutionForm?.setValue(mockInstitucion.emailInstitution);
    typeInstitutionForm?.setValue(mockInstitucion.typeInstitution);
    stateInstitutionForm?.setValue(mockInstitucion.stateInstitution);
    cityInstitutionForm?.setValue(mockInstitucion.cityInstitution);

    // Assert
    expect(component.formInstitucion.form.invalid).toEqual(false);
  });


});
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

export class ClsFormEstudiante {
  form: FormGroup;
  constructor() {
    this.form = new FormGroup({
      ciStudent: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
        Validators.pattern('^[0-9]*$'),
      ]),
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern('^[a-zA-Zñáéíöäëéöåç ]*$'),
      ]),

      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern('^[a-zA-Zñáéíöäëéöåç ]*$'),
      ]),
      ageStudent: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(3),
        Validators.pattern('^[0-9]*$'),
      ]),

      addressStudent: new FormControl('', [Validators.minLength(2)]),
      phoneStudent: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(10),
        Validators.pattern('^[0-9]*$'),
      ]),
      emailStudent: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      gradeStudent: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(2),
        Validators.pattern('^[0-9]*$'),
      ]),
      parallelStudent: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(1),
        //Solo letras mayusculas
        Validators.pattern('^[A-Zñáéíöäëéöåç ]*$'),
      ]),
      institucion: new FormControl(false),
    });
  }

  selectValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const value = control.value;
    if (value === null || value === undefined || value === '') {
      return { required: true };
    }
    return null;
  }
}

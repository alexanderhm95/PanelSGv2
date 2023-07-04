import { FormControl, FormGroup, Validators } from '@angular/forms';

export class ClsFormTestEstudiante {
  form: FormGroup;
  constructor() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      imagen: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      valor: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern('^[0-9]*$'),
      ]),
      section: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern('^[0-9]*$'),
      ]),
    });
  }
}

import { FormControl, FormGroup, Validators } from '@angular/forms';

export class ClsFormCaso {
  //private isPhoneRex = new RegExp('^[0-9]+$')

  form: FormGroup;
  constructor() {
    this.form = new FormGroup({
      ciStudent: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
      ]),
      nameStudent: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      lastNameStudent: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      gender: new FormControl('', [Validators.required]),
      ageStudent: new FormControl('', [Validators.required]),
      addressStudent: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      phoneStudent: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(10),
      ]),
      gradeStudent: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(2),
      ]),
      parallelStudent: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(1),
      ]),
      selectTeacher: new FormControl('', []),
      ciTeacher: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
      ]),
      nameTeacher: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      lastNameTeacher: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      addressTeacher: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      phoneTeacher: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(10),
      ]),
      emailTeacher: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
    });
  }
}

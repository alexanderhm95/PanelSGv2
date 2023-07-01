import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

export class ClsFormDece {
  //private isPhoneRex = new RegExp('^[0-9]+$')
  form: FormGroup;
  constructor() {
    this.form = new FormGroup(
      {
        CI: new FormControl('', [
          Validators.required,
          Validators.maxLength(10),
        ]),
        name: new FormControl('', [
          Validators.required,
          Validators.minLength(3),
        ]),
        lastName: new FormControl('', [
          Validators.required,
          Validators.minLength(3),
        ]),
        address: new FormControl('', [
          Validators.required,
          Validators.minLength(5),
        ]),
        phone: new FormControl('', [
          Validators.required,
          //Validators.pattern(this.isPhoneRex),
          Validators.minLength(6),
          Validators.maxLength(10),
        ]),
        email: new FormControl('', [Validators.required, Validators.email]),
        nameInstitution: new FormControl(false),

        password: new FormControl('', [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(10),
        ]),
        password_confirmation: new FormControl('', [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(10),
        ]),
      },
      {
        validators: this.passwordMatchValidator,
      }
    );
  }
  passwordMatchValidator(
    control: AbstractControl
  ): { [key: string]: boolean } | null {
    const password = control.get('password');
    const confirmPassword = control.get('password_confirmation');

    if (
      password &&
      confirmPassword &&
      password.value !== confirmPassword.value
    ) {
      return { passwordMismatch: true };
    }

    return null;
  }
}

export class ClsFormDeceUpdate {
  //private isPhoneRex = new RegExp('^[0-9]+$')
  form: FormGroup;
  constructor() {
    this.form = new FormGroup({
      CI: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      address: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      phone: new FormControl('', [
        Validators.required,
        //Validators.pattern(this.isPhoneRex),
        Validators.minLength(6),
        Validators.maxLength(10),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      nameInstitution: new FormControl(false),
    });
  }
}

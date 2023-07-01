import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

export class ClsFormUsuario {
  form: FormGroup;
  constructor() {
    this.form = new FormGroup(
      {
        name: new FormControl('', [
          Validators.required,
          Validators.minLength(6),
        ]),
        lastName: new FormControl('', [
          Validators.required,
          Validators.minLength(6),
        ]),
        age: new FormControl('', [
          Validators.minLength(1),
          Validators.maxLength(3),
        ]),
        address: new FormControl('', [Validators.minLength(10)]),
        phone: new FormControl('', [
          Validators.minLength(6),
          Validators.maxLength(10),
        ]),
        email: new FormControl('', [Validators.required, Validators.email]),
        CI: new FormControl('', [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
        ]),
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

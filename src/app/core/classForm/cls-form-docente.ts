import { FormGroup, FormControl, Validators, AbstractControl } from "@angular/forms";

export class ClsFormDocente {

    form: FormGroup;
    constructor() {
        this.form = new FormGroup({
            CI: new FormControl('', [
                Validators.required,
                Validators.maxLength(10),
                Validators.maxLength(10),
                Validators.pattern('[0-9]*'),
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
              address: new FormControl('', [Validators.minLength(2)]),
              phone: new FormControl('', [
                Validators.required,
                Validators.minLength(6),
                Validators.maxLength(10),
                Validators.pattern('[0-9]*'),
              ]),
              email: new FormControl('', [Validators.required, Validators.email]),
        })
    }

    selectValidator(control: AbstractControl): { [key: string]: boolean } | null {
        const value = control.value;
        if (value === null || value === undefined || value === '') {
            return { 'required': true };

        }
        return null;
    }
}



export class ClsFormUpdateDocente {

    form: FormGroup;
    constructor() {
        this.form = new FormGroup({
            CI: new FormControl('', [
                Validators.required,
                Validators.maxLength(10),
                Validators.maxLength(10),
                Validators.pattern('[0-9]*'),
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
              address: new FormControl('', [Validators.minLength(2)]),
              phone: new FormControl('', [
                Validators.required,
                Validators.minLength(6),
                Validators.maxLength(10),
                Validators.pattern('[0-9]*'),
              ]),
              email: new FormControl('', [Validators.required, Validators.email]),
              nameInstitucion: new FormControl('', [Validators.required])
        })
    }

    selectValidator(control: AbstractControl): { [key: string]: boolean } | null {
        const value = control.value;
        if (value === null || value === undefined || value === '') {
            return { 'required': true };

        }
        return null;
    }
}



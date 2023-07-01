import { AbstractControl, FormControl, FormGroup, Validators } from "@angular/forms";

export class ClsFormEstudiante {

    form: FormGroup;
    constructor() {
        this.form = new FormGroup({
            ciStudent: new FormControl('',
                [
                    Validators.required,
                    Validators.minLength(10),
                    Validators.maxLength(10)
                ]),
            name: new FormControl('',
                [
                    Validators.required,
                    Validators.minLength(3)
                ]),
            lastName: new FormControl('',
                [
                    Validators.required,
                    Validators.minLength(3)
                ]),
            ageStudent: new FormControl('',
                [
                    Validators.required,
                ]),
            addressStudent: new FormControl('',
                [
                    Validators.required,
                    Validators.minLength(20)
                ]),
            phoneStudent: new FormControl('',
                [
                    Validators.required,
                    Validators.minLength(6),
                    Validators.maxLength(10)
                ]),
            emailStudent: new FormControl('',
                [
                    Validators.required,
                    Validators.email
                ]),
            gradeStudent: new FormControl('',
                [
                    Validators.required,
                    Validators.minLength(1),
                    Validators.maxLength(2)
                ]),
            parallelStudent: new FormControl('',
                [
                    Validators.required,
                    Validators.minLength(1),
                    Validators.maxLength(1)
                ]),
            institucion: new FormControl(false),
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





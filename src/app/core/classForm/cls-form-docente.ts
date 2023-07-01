import { FormGroup, FormControl, Validators, AbstractControl } from "@angular/forms";

export class ClsFormDocente {

    form: FormGroup;
    constructor() {
        this.form = new FormGroup({
            ciTeacher: new FormControl('',
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
            address: new FormControl('',
                [
                    Validators.required,
                    Validators.minLength(20)
                ]),
            phone: new FormControl('',
                [
                    Validators.required,
                    Validators.minLength(6),
                    Validators.maxLength(10)
                ]),
            email: new FormControl('',
                [
                    Validators.required,
                    Validators.email
                ]),
            nameInstitucion: new FormControl(false),
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





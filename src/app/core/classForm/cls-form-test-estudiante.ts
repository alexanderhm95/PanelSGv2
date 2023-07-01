import { FormControl, FormGroup, Validators } from "@angular/forms";

export class ClsFormTestEstudiante {
    public isNumberRegx = '/^[0-9]+$/';
    form: FormGroup;
    constructor() {
        this.form = new FormGroup({
            name: new FormControl('',
                [
                    Validators.required,
                    Validators.minLength(3)
                ]),
            imagen: new FormControl('',
                [
                    Validators.required,
                    Validators.minLength(3)
                ]),
            valor: new FormControl('',
                [
                    Validators.required,
              ]),
            section: new FormControl('',
                [
                    Validators.required,
               ])
        })
    }
}

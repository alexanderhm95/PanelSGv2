import { ClsFormEstudiante } from '@/app/core/classForm/cls-form-estudiante';
import { InstitutionService } from '@/app/shared/services/api/institution.service';
import { PersonaService } from '@/app/shared/services/api/persona.service';
import { StudentService } from '@/app/shared/services/api/student.service';
import { Component, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent {

  public formStudent = new ClsFormEstudiante();
  public instituciones: any[] = [];
  public studentPerson: any;
  public student: any;
  public institucionValue= "";
  public id: any;

  constructor(
    private institutionService: InstitutionService,
    private studentService: StudentService,
    private personService: PersonaService,
    private route: ActivatedRoute,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.formStudent.form.reset();
    this.getInstitutions();
    this.getStudent();
  }

  update() {
    const person = {
      name: this.formStudent.form.value.name,
      lastName: this.formStudent.form.value.lastName,
      age: this.formStudent.form.value.ageStudent,
      address: this.formStudent.form.value.addressStudent,
      phone: this.formStudent.form.value.phoneStudent,
      email: this.formStudent.form.value.emailStudent,
      CI: this.formStudent.form.value.ciStudent
    }

    const student = {
      CI: this.formStudent.form.value.ciStudent,
      nameInstitution: this.formStudent.form.value.institucion,
      grade: this.formStudent.form.value.gradeStudent,
      parallel: this.formStudent.form.value.parallelStudent
    }

    this.studentService.updateStudent(this.id, student).subscribe(
      (res) => {
        const { message, studentUpdate } = res;
        this.personService.updatePersona(studentUpdate.person, person).subscribe(
          (res) => {
            this.router.navigate(['../../listar'], { relativeTo: this.route });
          }, (error) => {
            console.log(error)
          }
        )
      }, (error) => {
        console.log(error)
      }
    )
  }


  getStudent() {
    this.studentService.getStudent(this.id).subscribe(
      (res) => {
        const {message, data }= res;
        this.student = data;
        this.setValuesStudent(this.student)
        console.log(message)
      }, (error) => {
        console.log(error)
      }
    )
  }


  setValuesStudent(student: any) {
    this.formStudent.form.setValue({
      ciStudent: student.CI,
      name: student.name,
      lastName: student.lastName,
      ageStudent: student.age,
      addressStudent: student.address,
      phoneStudent: student.phone,
      emailStudent: student.email,
      institucion: student.nameInstitution,
      gradeStudent: student.grade,
      parallelStudent: student.parallel
    })
    this.formStudent.form.get('institucion')?.patchValue(student.nameInstitution);
    this.formStudent.form.markAllAsTouched();
  }




  getInstitutions() {
    this.institutionService.getAllInstitution().subscribe(
      res => {
        const { message, data } = res;
        this.instituciones = data;
        console.log(message)
      }
    )
  }


  cancel() {
    this.router.navigate(['../../listar'], { relativeTo: this.route });
  }

}

import { ClsFormCaso } from '@/app/core/classForm/cls-form-caso';
import { AuthService } from '@/app/shared/services/api/auth.service';
import { CasosService } from '@/app/shared/services/api/casos.service';
import { DocenteService } from '@/app/shared/services/api/docente.service';
import { InstitutionService } from '@/app/shared/services/api/institution.service';
import { PersonaService } from '@/app/shared/services/api/persona.service';
import { StudentService } from '@/app/shared/services/api/student.service';
import { UserService } from '@/app/shared/services/api/user.service';
import { NotificationsService } from '@/app/shared/services/utils/notifications.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css'],
})
export class RegistrarComponent implements OnInit {
  public formCaso = new ClsFormCaso();
  public agregar = false;
  public teachers: any[] = [];
  public institution: any;

  constructor(
    private notification: NotificationsService,
    private teacherService: DocenteService,
    private casoService: CasosService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.formCaso.form.reset();
    this.institution = this.authService.getInstitution();
    console.log(this.institution);
    this.getTeachers();
  }

  create() {
    const {
      ciStudent,
      nameStudent,
      lastNameStudent,
      addressStudent,
      gender,
      ageStudent,
      phoneStudent,
      gradeStudent,
      parallelStudent,
      selectTeacher,
      ciTeacher,
      nameTeacher,
      lastNameTeacher,
      addressTeacher,
      phoneTeacher,
      emailTeacher,
    } = this.formCaso.form.value;

    let body;
    console.log(this.authService.getUserId());
    if (selectTeacher === null) {
      body = {
        idDece: this.authService.getUserId(),
        ciStudent,
        nameStudent,
        lastNameStudent,
        addressStudent,
        gender: gender,
        ageStudent,
        phoneStudent,
        gradeStudent,
        parallelStudent,
        ciTeacher,
        nameTeacher,
        lastNameTeacher,
        addressTeacher,
        phoneTeacher,
        emailTeacher,
        nameInstitution: this.authService.getInstitution(),
      };
    } else {
      body = {
        idDece: this.authService.getUserId(),
        ciStudent,
        nameStudent,
        lastNameStudent,
        addressStudent,
        gender:gender,
        ageStudent,
        phoneStudent,
        gradeStudent,
        parallelStudent,
        ciTeacher: selectTeacher,
        nameInstitution: this.authService.getInstitution(),
      };
    }

    this.casoService.createCaso(body).subscribe(
      (res) => {
        const { message, data } = res;
        this.notification.showSuccess('Exito', message);
        this.router.navigate(['/casos']);
      },
      (err) => {
        this.notification.showError('Error', err.error.message);
      }
    );
  }

  getTeachers() {
    this.teacherService.getAllTeacher().subscribe((res) => {
      const { message, data } = res;
      this.teachers = data;
      console.log(this.teachers);
      console.log(message);
    });
  }

  agregarDocente() {
    this.agregar = !this.agregar;
  }
  cancel() {
    this.router.navigate(['../listar'], { relativeTo: this.route });
  }
}

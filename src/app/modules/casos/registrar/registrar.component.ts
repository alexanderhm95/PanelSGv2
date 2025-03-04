import { ClsFormCaso } from '@/app/core/classForm/cls-form-caso';
import { AuthService } from '@/app/shared/services/api/auth.service';
import { CasosService } from '@/app/shared/services/api/casos.service';
import { DocenteService } from '@/app/shared/services/api/docente.service';
import { ControlErrorService } from '@/app/shared/services/utils/controlErrorService';
import { NotificationsService } from '@/app/shared/services/utils/notifications.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';


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

  private unsubscribe$ = new Subject<void>();

  constructor(
    public controlError: ControlErrorService,
    public notification: NotificationsService,
    private teacherService: DocenteService,
    private casoService: CasosService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.formCaso.form.reset();
    this.institution = this.authService.getInstitution();
    this.getTeachers();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private getTeachers(): void {
    this.teacherService.getTeachersInstitutions({ data: this.institution })
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(
        res => this.handleGetTeachersSuccess(res),
        err => this.handleGetTeachersError(err)
      );
  }

  private handleGetTeachersSuccess(res: any): void {
    const { message, data } = res;
    this.teachers = data;
    console.log(message);
  }

  private handleGetTeachersError(err: any): void {
    this.notification.showError('Error', err.error.error);
  }


  create(): void {
    if (!this.validateForm()) return;

    const body = this.buildRequestBody();
    this.casoService.createCaso(body)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(
        res => this.handleCreateSuccess(res),
        err => this.handleCreateError(err)
      );
  }

  private validateForm(): boolean {
    const {
      gender,
      selectTeacher,
    } = this.formCaso.form.value;

    // Validación para el género
    if (gender === '0' || gender === null) {
      this.notification.showError('Error', 'Debe seleccionar un género');
      return false;
    }

    // Validación para el docente seleccionado
    if ((selectTeacher === null || selectTeacher === null) && this.agregar === true) {
      this.notification.showError('Error', 'Debe seleccionar un docente');
      return false;
    }

    // Puedes agregar más validaciones aquí

    return true;
  }


  private buildRequestBody(): any {
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
    } = this.formCaso.form.value;

    const body = {
      idDece: this.authService.getUserId(),
      ciStudent,
      nameStudent,
      lastNameStudent,
      addressStudent,
      gender,
      ageStudent,
      phoneStudent,
      gradeStudent,
      parallelStudent,
      ciTeacher: selectTeacher,
      nameInstitution: this.authService.getInstitution(),
    };

    return body;
  }

  private handleCreateSuccess(res: any): void {
    const { message } = res;
    this.notification.showSuccess('Registro', message);
    this.router.navigate(['/casos/listar']);
  }

  private handleCreateError(error: any): void {
    if (error.status === 0) {
      this.notification.showError('Error', 'Error de conexión con el servidor');
    } else {
      this.notification.showError('Error', error.error.error);
    }
  }

  cancel(): void {
    this.router.navigate(['../listar'], { relativeTo: this.route });
  }
}
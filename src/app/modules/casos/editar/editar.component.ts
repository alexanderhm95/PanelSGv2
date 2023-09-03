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
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css'],
})

export class EditarComponent implements OnInit {
  public formCaso = new ClsFormCaso();
  public teachers: any[] = [];
  public institution: any;
  public id: string | null = null;
  public caso: any;

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
    this.initializeComponent();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private initializeComponent(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getCaso(this.id);
    this.formCaso.form.reset();
    this.institution = this.authService.getInstitution();
    this.getTeachers();
  }

  private getCaso(id: string | null): void {
    this.casoService.getCaso(id)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(
        res => {
          const { message, data } = res;
          this.caso = data;
          this.setValues(this.caso);
          console.log(message);
        }
      );
  }


  setValues(caso: any) {
    this.formCaso.form.patchValue({
      ciStudent: caso.ciStudent,
      nameStudent: caso.nameStudent,
      lastNameStudent: caso.lastNameStudent,
      addressStudent: caso.addressStudent,
      gender: caso.gender,
      ageStudent: caso.ageStudent,
      phoneStudent: caso.phoneStudent,
      gradeStudent: caso.grade,
      parallelStudent: caso.parallel,
      selectTeacher: caso.ciTeacher,
    })
  }

  update() {
    if (!this.validateForm()) {
      return;
    }

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
      idStudent: this.caso.idStudent,
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

    this.casoService.updateCaso(this.id, body)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(
        res => this.handleSuccess(res),
        err => this.handleError(err)
      );
  }

  private validateForm(): boolean {
    const { gender, selectTeacher } = this.formCaso.form.value;

    if (!this.isValueValid(gender, 'Debe seleccionar un género')) return false;
    if (!this.isValueValid(selectTeacher, 'Debe seleccionar un docente')) return false;

    return true;
  }

  private isValueValid(value: any, errorMessage: string): boolean {
    if (value === '0' || value === null) {
      this.notification.showError('Error', errorMessage);
      return false;
    }
    return true;
  }

  private handleSuccess(res: any): void {
    const { message } = res;
    this.notification.showSuccess('Actualizado', message);
    this.router.navigate(['/casos/listar']);
  }

  private handleError(err: any): void {
    this.notification.showError('Error', err.error.error);
  }

  private getTeachers(): void {
    this.teacherService.getTeachersInstitutions({ data: this.authService.getInstitution() })
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(
        res => {
          const { message, data } = res;
          this.teachers = data;
          console.log(message);
        }
      );
  }

  public cancel(): void {
    this.router.navigate(['../../listar'], { relativeTo: this.route });
  }

}

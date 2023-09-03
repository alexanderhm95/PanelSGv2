import { ClsFormDocente } from '@/app/core/classForm/cls-form-docente';
import { EvaluatorRole } from '@/app/core/interfaces/interface-roleEvaluator';
import { AuthService } from '@/app/shared/services/api/auth.service';
import { DocenteService } from '@/app/shared/services/api/docente.service';
import { ControlErrorService } from '@/app/shared/services/utils/controlErrorService';
import { NotificationsService } from '@/app/shared/services/utils/notifications.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-registroDocente',
  templateUrl: './registroDocente.component.html',
  styleUrls: ['./registroDocente.component.css'],
})
export class RegistroDocenteComponent implements OnInit, OnDestroy {
  public formDocente = new ClsFormDocente();
  public institucion: any;
  public teacher?: EvaluatorRole;
  private unsubscribe$ = new Subject<void>();

  constructor(
    public controlError: ControlErrorService,
    public notification: NotificationsService,
    private teacherService: DocenteService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.resetForm();
    this.institucion = this.authService.getInstitution();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private resetForm(): void {
    this.formDocente.form.reset();
  }

  private buildRequestBody(): any {
    const { CI, name, lastName, address, phone, email } = this.formDocente.form.value;
    return {
      CI,
      name,
      lastName,
      address,
      phone,
      email,
      nameInstitution: this.institucion,
    };
  }

  private handleError(err: any): void {
    if (err.status === 0) {
      this.notification.showError('Error', 'Error de conexión con el servidor');
    } else {
      this.notification.showError('Error', err.error.error);
    }
  }

  create(): void {
    const body = this.buildRequestBody();

    this.teacherService.createTeacher(body)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(
        (res) => {
          const { message } = res;
          this.notification.showSuccess('Registro', message);
          this.router.navigate(['../docentes'], { relativeTo: this.route });
        },
        (err) => this.handleError(err)
      );
  }

  cancel(): void {
    this.router.navigate(['../docentes'], { relativeTo: this.route });
  }
}

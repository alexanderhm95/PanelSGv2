import { AuthService } from '@/app/shared/services/api/auth.service';
import { DocenteService } from '@/app/shared/services/api/docente.service';
import { NotificationsService } from '@/app/shared/services/utils/notifications.service';
import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-listar-docente',
  templateUrl: './listar-docente.component.html',
  styleUrls: ['./listar-docente.component.css']
})

export class ListarDocenteComponent {
  public docentes: TeacherData[] = [];
  public search = '';
  public loading = true;

  private unsubscribe$ = new Subject<void>();

  constructor(
    private notification: NotificationsService,
    private docenteService: DocenteService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.getTeachers();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private getTeachers(): void {
    const institution = this.authService.getInstitution();
    this.docenteService.getTeachersInstitutions({ data: institution })
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(
        res => this.handleGetTeachersSuccess(res),
        err => this.handleGetTeachersError(err)
      );
  }

  private handleGetTeachersSuccess(res: any): void {
    const { message, data } = res;
    this.docentes = data;
    this.loading = false;
    console.log(message);
  }

  private handleGetTeachersError(error: any): void {
    this.loading = false;
    if (error.status === 0) {
      this.notification.showError('Error', 'Error de conexión con el servidor');
    } else {
      this.notification.showError('Error', error.error.error);
    }
  }

  public delete(id: string): void {
    this.notification
      .showConfirm(
        'warning',
        'Eliminar Docente',
        '¿Está seguro de eliminar este docente?',
        'Eliminar',
        'Cancelar'
      )
      .then((result) => {
        if (result.isConfirmed) {
          this.docenteService.deleteTeacher(id)
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe(
              res => this.handleDeleteSuccess(res),
              err => this.handleDeleteError(err)
            );
        }
      });
  }

  private handleDeleteSuccess(res: any): void {
    const { message } = res;
    this.notification.showSuccess('Eliminado', message);
    this.getTeachers();
  }

  private handleDeleteError(err: any): void {
    if (err.status === 0) {
      this.notification.showError('Error', 'No se pudo conectar con el servidor');
    } else {
      this.notification.showError('Error', err.error.error);
      console.log(err);
    }
    this.getTeachers();
  }
}

// Interfaz de recepción
interface TeacherData {
  id: string;
  CI: string;
  name: string;
  lastName: string;
  phone: string;
  email: string;
  nameInstitution: string;
  role: string;
  status: boolean;
}
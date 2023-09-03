import { Component, OnInit, OnDestroy } from '@angular/core';
import { DatePipe } from '@angular/common';
import { AuthService } from '@/app/shared/services/api/auth.service';
import { FilterTablesPipe } from '@/app/shared/pipes/filter-tables.pipe';
import { TestDocenteService } from '@/app/shared/services/api/test-docente.service';
import { NotificationsService } from '@/app/shared/services/utils/notifications.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css'],
  providers: [DatePipe, FilterTablesPipe]
})
export class ListarComponent implements OnInit, OnDestroy {
  public tests: any[] = [];
  public search = '';
  public loading = true;
  public id: string | undefined;
  private unsubscribe$ = new Subject<void>();

  constructor(
    private serviceCasoTeacher: TestDocenteService,
    private authService: AuthService,
    private notification: NotificationsService
  ) { }

  ngOnInit(): void {
    this.loadTests();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private async loadTests(): Promise<void> {
    this.id = this.authService.getUserId();
    try {
      const res = await this.serviceCasoTeacher.getAll(this.id).toPromise();
      this.handleLoadTestsSuccess(res);
    } catch (error) {
      this.handleError(error);
    }
  }

  private handleLoadTestsSuccess(res: { message: string, data: any[] }): void {
    this.tests = res.data;
    this.loading = false;
  }

  async deleteTest(id: string): Promise<void> {
    const remarks = await this.notification.showObservationPrompt(
      '¿Estás seguro de querer eliminar el Test?',
      'Por favor, introduce una razón u observación:'
    );
    this.validateAndDeleteTest(id, remarks);
  }

  private validateAndDeleteTest(id: string, remarks: string | null): void {
    if (remarks === null) {
      this.notification.showError('Acción cancelada', 'La acción ha sido cancelada por el usuario.');
      return;
    }

    if (remarks.length < 10) {
      this.notification.showError('Observación inválida', 'Debe introducir una observación de mínimo 10 caracteres.');
      return;
    }

    this.executeDeleteTest(id, remarks);
  }

  private executeDeleteTest(id: string, remarks: string): void {
    this.serviceCasoTeacher.delete(id, { remarks })
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(
        () => this.handleDeleteSuccess(),
        err => this.handleError(err)
      );
  }

  private handleDeleteSuccess(): void {
    this.notification.showSuccess('Eliminado', 'Test eliminado correctamente');
    this.loadTests();  // Opté por recargar solo los datos en lugar de todo el componente
  }

  private handleError(error: any): void {
    this.loading = false;
    const title = 'Error';
    const message = error.status === 0 ? 'Error de conexión con el servidor' : error.error.error;
    this.notification.showError(title, message);
  }
}

import { Component, OnInit, OnDestroy, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from '@/app/shared/services/api/auth.service';
import { TestCasoEstudianteService } from '@/app/shared/services/api/test-caso-estudiante.service';
import { NotificationsService } from '@/app/shared/services/utils/notifications.service';
import { DatePipe } from '@angular/common';
import { FilterTablesPipe } from '@/app/shared/pipes/filter-tables.pipe';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css'],
  providers: [DatePipe, FilterTablesPipe],
})
export class ListarComponent implements OnInit, OnDestroy {
  public tests: any[] = [];
  public search = '';
  public loading = true;
  public id: any;

  private unsubscribe$ = new Subject<void>();

  constructor(
    private serviceCasoEstudiante: TestCasoEstudianteService,
    private notification: NotificationsService,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.loadData();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private loadData(): void {
    this.id = this.authService.getUserId();
    this.fetchAllTests(this.id);
  }

  private fetchAllTests(userId: string): void {
    this.serviceCasoEstudiante.getAll(userId)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(
        res => this.handleFetchSuccess(res),
        err => this.handleFetchError(err)
      );
  }

  private handleFetchSuccess(res: { message: string, data: any[] }): void {
    this.loading = false;
    this.ngOnInit()

  }

  private handleFetchError(err: any): void {
    this.loading = false;
    this.notification.showError('Error', err.error.error);
    this.ngOnInit()
  }

  scoreUpdate(id: string, operation: 'plus' | 'less'): void {
    const payload = operation === 'plus' ? { scoreEvaluator: true } : { score: false };
    this.updateScore(id, payload);
  }

  private updateScore(id: string, payload: any): void {
    this.serviceCasoEstudiante.updateScore(id, payload)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(
        res => this.handleUpdateSuccess(res),
        err => this.handleUpdateError(err)
      );
  }

  private handleUpdateSuccess(res: { message: string, data: any[] }): void {
    this.notification.showSuccess('Actualizado', 'Punto del observador actualizado');
    this.ngOnInit()
  }

  private handleUpdateError(error: any): void {
    this.loading = false;
    if (error.status === 0) {
      this.notification.showError('Error', 'Error de conexión con el servidor');
    } else {
      this.notification.showError('Error', error.error.error);
    }
    this.ngOnInit()
  }

  async deleteTest(id: any) {

    const remarks = await this.notification.showObservationPrompt('¿Estás seguro de querer eliminar el Test?', 'Por favor, introduce una razón u observación:');

    if (!this.validateRemarks(remarks)) return;

    this.serviceCasoEstudiante.delete(id, { remarks })
      .pipe(takeUntil(this.unsubscribe$)) // Cancela la suscripción al destruir el componente
      .subscribe(
        res => this.handleDeleteTestSuccess(res),
        err => this.handleDeleteTestError(err)
      );

  }

  private validateRemarks(remarks: string | null): boolean {
    if (remarks === null || remarks.length < 10) {
      this.notification.showError('Observación inválida', 'Debe introducir una observación de mínimo 10 caracteres.');
      return false;
    }
    return true;
  }

  private handleDeleteTestSuccess(res: any): void {
    this.notification.showSuccess('Eliminado', 'Test eliminado correctamente');
    this.ngOnInit()
  }

  private handleDeleteTestError(error: any): void {
    this.loading = false;
    if (error.status === 0) {
      this.notification.showError('Error', 'Error de conexión con el servidor');
    } else {
      this.notification.showError('Error', error.error.error);
    }
    this.ngOnInit()
  }
}

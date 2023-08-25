import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core'; // Importa OnDestroy
import { DatePipe } from '@angular/common';
import { AuthService } from '@/app/shared/services/api/auth.service';
import { FilterTablesPipe } from '@/app/shared/pipes/filter-tables.pipe';
import { TestDocenteService } from '@/app/shared/services/api/test-docente.service';
import { NotificationsService } from '@/app/shared/services/utils/notifications.service';
import { takeUntil } from 'rxjs/operators'; // Importa takeUntil
import { Subject } from 'rxjs'; // Importa Subject

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css'],
  providers: [DatePipe, FilterTablesPipe],
})
export class ListarComponent implements OnInit, OnDestroy { // Implementa OnDestroy
  public tests: any[] = [];
  public search = '';
  public loading = true;
  public id: any;

  private unsubscribe$ = new Subject<void>(); // Señal para cancelar las suscripciones

  constructor(
    private serviceCasoTeacher: TestDocenteService,
    private authService: AuthService,
    private notification: NotificationsService
  ) {}

  ngOnInit(): void {
    this.loadTests();
  }

  loadTests(): void {
    this.id = this.authService.getUserId();
    this.serviceCasoTeacher.getAll(this.id)
      .pipe(takeUntil(this.unsubscribe$)) // Utiliza takeUntil con la señal
      .subscribe(
        (res) => {
          const { message, data } = res;
          this.tests = data;
          this.loading = false;
        },
        (error) => {
          this.loading = true;
          this.handleError(error);
        }
      );
  }

  deleteTest(id: any) {
    this.notification.showConfirm('warning', 'Peligro', '¿Está seguro de eliminar el Test?', 'Eliminar', 'Cancelar')
      .then((result) => {
        if (result.isConfirmed) {
          this.serviceCasoTeacher.delete(id)
            .pipe(takeUntil(this.unsubscribe$)) // Utiliza takeUntil con la señal
            .subscribe(
              (res) => {
                this.notification.showSuccess('Eliminado', 'Test eliminado correctamente');
                this.ngOnInit();
              },
              (err) => {
                this.notification.showError('Error', err.error.error);
              }
            );
        }
      });
  }

  ngOnDestroy(): void { // Método para cancelar las suscripciones cuando el componente se destruye
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private handleError(error: any): void { // Método separado para manejar errores
    if (error.status === 0) {
      this.notification.showError('Error', 'Error de conexión con el servidor');
    } else {
      this.notification.showError('Error', error.error.error);
    }
  }
}

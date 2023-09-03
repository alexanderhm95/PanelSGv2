
import { FilterTablesPipe } from '@/app/shared/pipes/filter-tables.pipe';
import { AuthService } from '@/app/shared/services/api/auth.service';
import { CasosService } from '@/app/shared/services/api/casos.service';
import { StudentService } from '@/app/shared/services/api/student.service';
import { NotificationsService } from '@/app/shared/services/utils/notifications.service';
import { environment } from '@/environments/environment';
import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css'],
  providers: [DatePipe, FilterTablesPipe],
})

export class ListarComponent implements OnInit {
  //public api = environment.api + '/api/1.0';

  public casos: any[] = [];
  public codigo = 0;
  public modalActivate = false;
  public loading = true;
  public search = '';
  public id: any;

  private unsubscribe$ = new Subject<void>();

  constructor(
    private notification: NotificationsService,
    private authService: AuthService,
    private casoService: CasosService,
    private studentService: StudentService,
  ) { }

  ngOnInit(): void {
    this.getCasos();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }



  private getCasos(): void {
    this.id = this.authService.getUserId();
    this.casoService.getAllCaso(this.id)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(
        res => this.handleGetCasosSuccess(res),
        err => this.handleGetCasosError(err)
      );
  }

  private handleGetCasosSuccess(res: any): void {
    const { message, data } = res;
    this.casos = data;
    this.loading = false;
    console.log(message);
  }

  private handleGetCasosError(err: any): void {
    this.loading = false;
    this.notification.showError('Error', err.error.error);
  }

  closeModal() {
    this.modalActivate = false;
    this.codigo = 0;
  }

  public openModal(CI: string): void {
    const body = { CI };
    this.studentService.generateCode(body)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(
        res => this.handleOpenModalSuccess(res),
        err => this.handleOpenModalError(err)
      );
  }


  private handleOpenModalSuccess(res: any): void {
    const { data } = res;
    this.codigo = data;
    this.ngOnInit();
    this.modalActivate = true;
  }

  private handleOpenModalError(err: any): void {
    this.notification.showError('Error', err.error.error);
  }

  public async deleteCaso(id: string): Promise<void> {
    const remarks = await this.notification.showObservationPrompt('¿Estás seguro de querer eliminar el Test?', 'Por favor, introduce una razón u observación:');

    if (!this.validateRemarks(remarks)) return;

    this.casoService.deleteCaso(id, { remarks })
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(
        res => this.handleDeleteCasoSuccess(res),
        err => this.handleDeleteCasoError(err)
      );
  }

  private validateRemarks(remarks: string | null): boolean {
    if (remarks === null || remarks.length < 10) {
      this.notification.showError('Observación inválida', 'Debe introducir una observación de mínimo 10 caracteres.');
      return false;
    }
    return true;
  }

  private handleDeleteCasoSuccess(res: any): void {
    this.notification.showSuccess('Eliminado', 'Caso eliminado correctamente');
    this.ngOnInit()
  }

  private handleDeleteCasoError(error: any): void {
    this.loading = false;
    if (error.status === 0) {
      this.notification.showError('Error', 'Error de conexión con el servidor');
    } else {
      this.notification.showError('Error', error.error.error);
    }
    this.ngOnInit()

  }
}

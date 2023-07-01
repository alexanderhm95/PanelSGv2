import { FilterTablesPipe } from '@/app/shared/pipes/filter-tables.pipe';
import { TestCasoEstudianteService } from '@/app/shared/services/api/test-caso-estudiante.service';
import { NotificationsService } from '@/app/shared/services/utils/notifications.service';
import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css'],
  providers: [DatePipe, FilterTablesPipe],
})
export class ListarComponent implements OnInit {
  public tests: any[] = [];
  public search = '';

  constructor(
    private serviceCasoEstudiante: TestCasoEstudianteService,
    private notification: NotificationsService
  ) {}

  ngOnInit(): void {
    this.serviceCasoEstudiante.getAll().subscribe((res) => {
      const { message, data } = res;
      this.tests = data;
      console.log(message);
    });
  }

  deleteTest(id: any) {
    this.notification
      .showConfirm(
        'warning',
        'Peligro',
        'Estas seguro de eliminar el Test?',
        'Si, eliminar!',
        'No, cancelar!'
      )
      .then((result) => {
        this.serviceCasoEstudiante.delete(id).subscribe(
          (res) => {
            this.notification.showSuccess(
              'Éxito',
              'Test eliminado correctamente'
            );
            console.log(res);
            this.ngOnInit();
          },
          (err) => {
            console.log(err.error);
            this.notification.showError('Error', 'No se pudo elimnar el test');
          }
        );
      });
  }
}

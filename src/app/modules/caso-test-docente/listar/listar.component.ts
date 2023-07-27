import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { AuthService } from '@/app/shared/services/api/auth.service';
import { FilterTablesPipe } from '@/app/shared/pipes/filter-tables.pipe';
import { TestDocenteService } from '@/app/shared/services/api/test-docente.service';
import { NotificationsService } from '@/app/shared/services/utils/notifications.service';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css'],
  providers: [DatePipe, FilterTablesPipe],
})
export class ListarComponent implements OnInit {
  public tests: any[] = [];
  public search = '';
  public loading = true;
public id:any;

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
    this.serviceCasoTeacher.getAll(this.id).subscribe(
      (res) => {
        const { message, data } = res;
        this.tests = data;
        console.log(message);
        this.loading = false;
      },
      (error) => {
        this.loading = true;
        if (error.status === 0) {
          this.notification.showError('Error', 'Error de conexión con el servidor');
        } else {
          this.notification.showError('Error', 'Error al cargar información');
        }
      }
    );
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
        if (result.isConfirmed) {
          this.serviceCasoTeacher.delete(id).subscribe(
            (res) => {
              this.notification.showSuccess(
                'Éxito',
                'Test eliminado correctamente'
              );
              this.ngOnInit();
            },
            (err) => {
              this.notification.showError(
                'Error',
                'No se pudo eliminar el test'
              );
            }
          );
        }
      });
  }
}

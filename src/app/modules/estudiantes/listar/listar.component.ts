import { FilterTablesPipe } from '@/app/shared/pipes/filter-tables.pipe';
import { StudentService } from '@/app/shared/services/api/student.service';
import { NotificationsService } from '@/app/shared/services/utils/notifications.service';
import { environment } from '@/environments/environment';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css'],
  providers: [FilterTablesPipe],
})
export class ListarComponent implements OnInit {
  public api = environment.api + '/api/1.0';
  public estudiantes: any[] = [];
  public search = '';
  public loading = true;

  constructor(
    private estudianteService: StudentService,
    private notification: NotificationsService
  ) {}

  ngOnInit(): void {
    this.estudianteService.getAllStudent().subscribe(
      (res) => {
        const { message, listaStudent } = res;
        this.estudiantes = listaStudent;
        this.loading = false;
        console.log(listaStudent);
      },
      (err) => {
        this.loading = true;

        console.log(err);
      }
    );
  }
  

  delete(id: any) {
    this.notification
      .showConfirm(
        'warning',
        'Peligro',
        'Estas seguro de eliminar al estudiante',
        'Si, eliminar!',
        'No, cancelar!'
      )
      .then((result) => {
        if (result.isConfirmed) {
          this.estudianteService.deleteStudent(id).subscribe(
            (res) => {
              const { message } = res;
              console.log(message);
              this.notification.showSuccess(
                'Éxito',
                'Estudiante eliminado correctamente'
              );
              this.ngOnInit();
            },
            (error) => {
              if (error.status === 0) {

                this.ngOnInit();
                this.notification.showError(
                  'Error',
                  'Error de conexión con el servidor, inténtelo mas tarde'
                );
              } else {

                this.ngOnInit();
                this.notification.showError('Error', error.error.error);
              }
            }
          );
        }
      });
  }
}

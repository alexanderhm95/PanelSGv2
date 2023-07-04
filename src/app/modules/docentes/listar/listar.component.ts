import { DocenteService } from '@/app/shared/services/api/docente.service';
import { FilterTablesPipe } from '@/app/shared/pipes/filter-tables.pipe';
import { environment } from '@/environments/environment';
import { Component, OnInit } from '@angular/core';
import { NotificationsService } from '@/app/shared/services/utils/notifications.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css'],
  providers: [FilterTablesPipe],
})
export class ListarComponent implements OnInit {
  public api = environment.api + '/api/1.0';
  public docentes: TeacherData[] = [];
  public search = '';
  public loading = true;

  constructor(
    private notification: NotificationsService,
    private docenteService: DocenteService
  ) {}

  ngOnInit(): void {
    this.getTeachers();
  }

  getTeachers() {
    this.docenteService.getAllTeacher().subscribe(
      (res) => {
        const { message, data } = res;
        this.docentes = data;
        this.loading = false;
        console.log(data);
        console.log(message);
      },
      (err) => {
        this.loading = true;
        if (err.status === 0) {
          this.notification.showError(
            'Error',
            'Error de conexión, fallo en el servidor'
          );
        } else {
          console.log(err);
        }
      }
    );
  }

  delete(id: string) {
    this.notification
      .showConfirm(
        'warning',
        'Eliminar Docente',
        '¿Estas seguro de eliminar este docente?',
        'Si, eliminar!',
        'Cancelar'
      )
      .then((result) => {
        if (result.isConfirmed) {
          this.docenteService.deleteTeacher(id).subscribe(
            (res) => {
              const { message, data } = res;
              this.notification.showSuccess('Docente', message);
              this.ngOnInit();
            },
            (error) => {
              if (error.status === 0) {
                this.notification.showError(
                  'Error ',
                  'No se pudo conectar con el servidor'
                );
              } else {
                console.log(error);
              }
            }
          );
        }
      });
  }
}

//Interfaz de recepion
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

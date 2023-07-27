import { InterfaceCaso } from '@/app/core/interfaces/interface-caso';
import { FilterTablesPipe } from '@/app/shared/pipes/filter-tables.pipe';
import { AuthService } from '@/app/shared/services/api/auth.service';
import { CasosService } from '@/app/shared/services/api/casos.service';
import { StudentService } from '@/app/shared/services/api/student.service';
import { NotificationsService } from '@/app/shared/services/utils/notifications.service';
import { environment } from '@/environments/environment';
import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, interval, takeUntil } from 'rxjs';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css'],
  providers: [DatePipe,FilterTablesPipe],
})
export class ListarComponent implements OnInit {
  public api = environment.api + '/api/1.0';

  public casos: any[] = [];
  public codigo = 0;
  public modalActivate = false;
  public loading = true;
  public search = '';
  public id: any;

  constructor(
    private notification: NotificationsService,
    private authService: AuthService,
    private casoService: CasosService,
    private studentService: StudentService,
    private router: Router
  ) {}

  ngOnInit(): void {
        this.getCasos();
  }



  getCasos() {
    this.id = this.authService.getUserId();
    this.casoService.getAllCaso(this.id).subscribe(
      (res) => {
        const { message, data } = res;
        this.casos = data;
        this.loading = false;
        console.log(this.casos);
        console.log(message);
      },(err) => {
        console.log('Error:', err.error);
        this.loading = false;
        this.notification.showError('Error', 'No se pudo obtener los casos');
      }
    );
  }

  closeModal() {
    this.modalActivate = false;
    this.codigo = 0;
  }

  openModal(CI: string) {
    console.log(CI);
    const body = {
      CI: CI,
    };
    this.studentService.generateCode(body).subscribe((res) => {
      const { data } = res;
      this.codigo = data;
      console.log(data);
      this.ngOnInit();
    });

    this.modalActivate = true;
  }

  deleteCaso(id: string) {
    this.notification
      .showConfirm(
        'warning',
        'Eliminar',
        '¿Está seguro de eliminar este registro?',
        'Si, eliminar',
        'Cancelar'
      )
      .then((result) => {
        if (result.isConfirmed) {
          this.casoService.deleteCaso(id).subscribe(
            (res) => {
              console.log(res);
              this.notification.showSuccess(
                'Eliminado',
                'Caso eliminado correctamente'
              );
              this.ngOnInit();
            },
            (err) => {
              if (err.status === 0) {
                this.notification.showError(
                  'Error',
                  'No se pudo conectar con el servidor'
                );
              } else {
                console.log(err);
                this.notification.showError('Error', err.error.error);
              }
            }
          );
        }
      });
  }
}

import { DeceService } from '@/app/shared/services/api/dece.service';
import { FilterTablesPipe } from '@/app/shared/pipes/filter-tables.pipe';
import { Component, OnInit } from '@angular/core';
import { InterfaceDece } from '@/app/core/interfaces/interface-dece';
import { NotificationsService } from '@/app/shared/services/utils/notifications.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css'],
  providers: [FilterTablesPipe],
})
export class ListarComponent implements OnInit {
  public deces: InterfaceDece[] = [];
  public search = '';

  constructor(
    private notification: NotificationsService,
    private deceService: DeceService,
    public filterTable: FilterTablesPipe
  ) {}

  ngOnInit(): void {
    this.getDeces();
  }

  getDeces() {
    this.deceService.getAllDece().subscribe(
      (res) => {
        this.deces = res.data;
        console.log(res);
      },
      (err) => {
        if (err.status === 0) {
          this.notification.showError(
            'Error',
            'No se pudo conectar con el servidor'
          );
        } else {
          console.log(err);
          this.notification.showError('Error', 'No se pudo obtener los datos');
        }
      }
    );
  }
  deleteDece(id: string) {
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
          this.deceService.deleteDece(id).subscribe(
            (res) => {
              console.log(res.message);
              this.notification.showSuccess(
                'Eliminado',
                'Registro eliminado correctamente'
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
                this.notification.showError(
                  'Error',
                  'No se pudo eliminar el registro'
                );
              }
            }
          );
        }
      });
  }
}

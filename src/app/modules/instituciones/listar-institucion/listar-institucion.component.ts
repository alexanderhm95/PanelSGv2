import { InterfaceInstitution } from '@/app/core/interfaces/interface-institution';
import { FilterTablesPipe } from '@/app/shared/pipes/filter-tables.pipe';
import { InstitutionService } from '@/app/shared/services/api/institution.service';
import { NotificationsService } from '@/app/shared/services/utils/notifications.service';
import { Component, OnInit } from '@angular/core';
import { Subscription  } from 'rxjs';

@Component({
  selector: 'app-listar-institucion',
  templateUrl: './listar-institucion.component.html',
  styleUrls: ['./listar-institucion.component.css'],
  providers: [FilterTablesPipe],
})
export class ListarInstitucionComponent implements OnInit {
  public instituciones: InterfaceInstitution[] = [];
  public search = '';
  public loading = true;
  private intervalSubscription: Subscription = new Subscription();

  constructor(
    private notification: NotificationsService,
    private institucionService: InstitutionService
  ) {}

  ngOnInit(): void {
    //this.intervalSubscription = interval(5000) // Intervalo de 5 segundos (ajusta según tus necesidades)
    //  .subscribe(() => {
        this.getInstitutions(); // Carga periédica de datos
    //  });
  }

  ngOnDestroy(): void {
    // Cancela la suscripción al intervalo cuando el componente se destruye
    if (this.intervalSubscription) {
      this.intervalSubscription.unsubscribe();
    }
  }

  getInstitutions() {
    this.institucionService.getAllInstitution().subscribe(
      (res) => {
        const { message, data } = res;
        this.instituciones = data;
        this.loading = false;
        console.log(message);
      },
      (err) => {
        this.loading = true;
        if (err.status === 0) {
          this.notification.showError(
            'Error de conexión',
            'No se ha podido conectar con el servidor'
          );
        } else {
          console.log(err);
        }
      }
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  deleteInstitution(id: any) {
    this.notification
      .showConfirm(
        'warning',
        'Eliminar institución',
        '¿Está seguro de eliminar la institución?',
        'Sí, eliminar',
        'No, cancelar'
      )
      .then((result) => {
        if (result.isConfirmed) {
          this.institucionService.deleteInstitution(id).subscribe(
            (res) => {
              const { message } = res;
              console.log(message);
              this.notification.showSuccess(
                'Institución eliminada',
                'La institución se ha eliminado correctamente'
              );
              this.ngOnInit();
            },
            (err) => {
              if (err.status === 0) {
                this.notification.showError(
                  'Error de conexión',
                  'No se ha podido conectar con el servidor, intente más tarde'
                );
              } else {
                this.notification.showError('Error', err.error.error);
              }
            }
          );
        }
      });
  }
}

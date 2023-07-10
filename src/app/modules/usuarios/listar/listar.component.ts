import { FilterTablesPipe } from '@/app/shared/pipes/filter-tables.pipe';
import { UserService } from '@/app/shared/services/api/user.service';
import { NotificationsService } from '@/app/shared/services/utils/notifications.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css'],
  providers: [FilterTablesPipe],
})
export class ListarComponent implements OnInit {
  public usuarios: Usuario[] = [];
  public modalActivate = false;
  private intervalSubscription: Subscription = new Subscription();
  public currentUser?: Usuario;
  public search = '';
  public loading = true;

  constructor(
    private notification: NotificationsService,
    private usuariosService: UserService,
  ) {}

  ngOnInit(): void {
    //this.intervalSubscription = interval(5000) // Intervalo de 5 segundos (ajusta según tus necesidades)
    //  .subscribe(() => {
        this.getUsers(); // Carga periédica de datos
     // });
  }

  ngOnDestroy(): void {
    // Cancela la suscripción al intervalo cuando el componente se destruye
    if (this.intervalSubscription) {
      this.intervalSubscription.unsubscribe();
    }
  }

 


  getUsers(): void {
    this.usuariosService.getAllUser().subscribe(
      (res) => {
        const {message, data} = res;
        this.usuarios = data;
        this.loading = false;
        console.log(message);
      },
      (err) => {
        console.log('Error:', err.error);
        this.notification.showError('Error', 'No se pudo obtener los usuarios');
      }
    );
  }

  delete(id: string) {
    this.notification
      .showConfirm(
        'warning',
        'Peligro',
        'Estas seguro de eliminar este usuario?',
        'Si, eliminar!',
        'No, cancelar!'
      )
      .then((result) => {
        if (result.isConfirmed) {
          this.usuariosService.deleteUser(id).subscribe(
            (res) => {
              this.notification.showSuccess(
                'Éxito',
                'Cuenta desactivada correctamente'
              );
              console.log(res.message);
              this.ngOnInit();
            },
            (err) => {
              console.log(err.error);
              this.ngOnInit()
              this.notification.showError(
                'Error',
                'No se pudo desactivar la cuenta'
              );
            }
          );
        }
      });
  }

  changedStatusUser(id: string, action: boolean) {
    const iconMessage = action ? 'info' : 'warning';
    const titleMessage = action ? 'Información' : 'Peligro';
    const message = action
      ? 'Estas seguro de activar este usuario?'
      : 'Estas seguro de desactivar este usuario?';
    const confirmButton = action ? 'Si, activar!' : 'Si, desactivar!';
    const cancelButton = action ? 'No, cancelar!' : 'No, cancelar!';
    const confirmMessage = action
      ? 'Cuenta activada correctamente'
      : 'Cuenta desactivada correctamente';
    const errorMessage = action
      ? 'No se pudo activar la cuenta'
      : 'No se pudo desactivar la cuenta';

    this.notification
      .showConfirm(
        iconMessage,
        titleMessage,
        message,
        confirmButton,
        cancelButton
      )
      .then((result) => {
        if (result.isConfirmed) {
          this.usuariosService.changedStatusUser(id, action).subscribe(
            (res) => {
              console.log(res);
              this.notification.showSuccess('Success', confirmMessage);
              this.ngOnInit();
            },
            (err) => {
              if (err.status === 0) {
                this.ngOnInit()
                this.notification.showError(
                  'Error',
                  'Error de conexión con el servidor'
                );
              } else {
                this.ngOnInit()
                console.log(err.error);
                this.notification.showError('Error', errorMessage);
              }
            }
          );
        }
      });
  }
}
interface Usuario {
  id: string;
  CI: string;
  email: string;
  role: string;
  status: boolean;
}
function interval(arg0: number) {
  throw new Error('Function not implemented.');
}

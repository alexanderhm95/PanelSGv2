import { FilterTablesPipe } from "@/app/shared/pipes/filter-tables.pipe";
import { UserService } from "@/app/shared/services/api/user.service";
import { NotificationsService } from "@/app/shared/services/utils/notifications.service";
import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css'],
  providers: [FilterTablesPipe],
})
export class ListarComponent implements OnInit {
  public usuarios: Usuario[] = [];
  public modalActivate = false;
  public currentUser?: Usuario;
  public search = '';
  public loading = true;
  private subscriptions: Subscription[] = [];

  constructor(
    private notification: NotificationsService,
    private usuariosService: UserService,
  ) {}

  ngOnInit(): void {
        this.getUsers(); 
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  getUsers(): void {
    this.loading = true;
    this.subscriptions.push(
      this.usuariosService.getAllUser().subscribe(
        (res) => {
          const { message, data } = res;
          this.usuarios = data;
          this.loading = false;
          console.log(message);
        },
        (err) => {
          console.log('Error:', err.error);
          this.loading = false;
          this.notification.showError('Error', 'No se pudo obtener los usuarios');
        }
      )
    );
  }

  delete(id: string): void {
    this.notification
      .showConfirm(
        'warning',
        'Peligro',
        'Estás seguro de eliminar este usuario?',
        'Si, eliminar!',
        'No, cancelar!'
      )
      .then((result) => {
        if (result.isConfirmed) {
          this.subscriptions.push(
            this.usuariosService.deleteUser(id).subscribe(
              (res) => {
                this.notification.showSuccess(
                  'Éxito',
                  'Cuenta eliminada correctamente'
                );
                console.log(res.message);
                this.ngOnInit();
              },
              (err) => {
                console.log(err.error);
                this.ngOnInit();
                this.notification.showError('Error', err.error.error);
              }
            )
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
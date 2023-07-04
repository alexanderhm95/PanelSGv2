import { ClsFormUsuario } from '@/app/core/classForm/cls-form-usuario';
import { UserRole } from '@/app/core/interfaces/interface-roleAdmin';
import { UserService } from '@/app/shared/services/api/user.service';
import { NotificationsService } from '@/app/shared/services/utils/notifications.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css'],
})
export class RegistrarComponent implements OnInit {
  public formUser = new ClsFormUsuario();
  public loading = false;
  isTooltipVisible = false;

  constructor(
    private notification: NotificationsService,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.formUser.form.reset();
  }

  toggleTooltip() {
    this.isTooltipVisible = !this.isTooltipVisible;
  }

  create() {
    const { CI, name, lastName, address, phone, email, password } =
      this.formUser.form.value;

    const body: UserRole = {
      CI,
      name,
      lastName,
      address,
      phone,
      email,
      password,
      role: 'ADMIN',
    };

    this.userService.createUser(body).subscribe(
      (res) => {
        this.notification.showSuccess('Success', 'Usuario registrado');
        console.log(res);
        this.router.navigate(['../listar'], { relativeTo: this.route });
      },
      (err) => {
        if (err.status === 0) {
          this.notification.showError(
            'Error',
            'Error de conexión con el servidor'
          );
        } else {
          this.notification.showError('Error', 'Error al registrar usuario');
          console.log(err);
        }
      }
    );
  }

  cancel() {
    this.router.navigate(['../listar'], { relativeTo: this.route });
  }
}

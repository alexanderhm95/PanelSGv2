import { ClsFormDece } from '@/app/core/classForm/cls-form-dece';
import { InterfaceDece } from '@/app/core/interfaces/interface-dece';
import { InterfaceInstitution } from '@/app/core/interfaces/interface-institution';
import { DeceService } from '@/app/shared/services/api/dece.service';
import { InstitutionService } from '@/app/shared/services/api/institution.service';
import { NotificationsService } from '@/app/shared/services/utils/notifications.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css'],
})
export class RegistrarComponent implements OnInit {
  public formDece = new ClsFormDece();
  public instituciones: InterfaceInstitution[] = [];
  constructor(
    private notification: NotificationsService,
    private institutionService: InstitutionService,
    private deceService: DeceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formDece.form.reset();
    this.getInstitutions();
  }
  create() {
    const {
      CI,
      name,
      lastName,
      address,
      phone,
      email,
      nameInstitution,
      password,
      password_confirmation,
    } = this.formDece.form.value;

    if (password !== password_confirmation) {
      this.notification.showError('Error', 'Las contraseñas no coinciden');
      return;
    }

    const newDece: InterfaceDece = {
      CI,
      name,
      lastName,
      address,
      phone,
      email,
      nameInstitution,
      password,
    };

    this.deceService.createDece(newDece).subscribe(
      (res) => {
        const { message } = res;
        console.log(message);
        this.notification.showSuccess('Dece', 'Registrado con éxito');
        this.router.navigate(['../listar'], { relativeTo: this.route });
      },
      (err) => {
        if (err.status === 0) {
          this.notification.showError(
            'Error',
            'Error de conexión con el servidor'
          );
        } else {
          this.notification.showError(
            'Error al registrar DECE',
            'El correo ya se encuentra registrado'
          );
          console.log(err.error);
        }
      }
    );
  }

  getInstitutions() {
    this.institutionService.getAllInstitution().subscribe((res) => {
      const { message, data } = res;
      this.instituciones = data;
      console.log(message);
    });
  }

  cancel() {
    this.router.navigate(['../listar'], { relativeTo: this.route });
  }
}

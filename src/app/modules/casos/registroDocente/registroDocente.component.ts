import { ClsFormDocente } from '@/app/core/classForm/cls-form-docente';
import { InterfaceInstitution } from '@/app/core/interfaces/interface-institution';
import { EvaluatorRole } from '@/app/core/interfaces/interface-roleEvaluator';
import { DocenteService } from '@/app/shared/services/api/docente.service';
import { InstitutionService } from '@/app/shared/services/api/institution.service';
import { NotificationsService } from '@/app/shared/services/utils/notifications.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-registroDocente',
  templateUrl: './registroDocente.component.html',
  styleUrls: ['./registroDocente.component.css'],
})
export class RegistroDocenteComponent implements OnInit {
  public formDocente = new ClsFormDocente();
  public instituciones: InterfaceInstitution[] = [];
  public teacher?: EvaluatorRole;

  constructor(
    private institutionService: InstitutionService,
    private notification: NotificationsService,
    private teacherService: DocenteService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formDocente.form.reset();
    this.getInstitutions();
  }

  create() {
    const { CI, name, lastName, address, phone, email, nameInstitucion } =
      this.formDocente.form.value;

    const body = {
      CI,
      name,
      lastName,
      address,
      phone,
      email,
      nameInstitution: nameInstitucion,
    };

    this.teacherService.createTeacher(body).subscribe(
      (res) => {
        const { message } = res;
        this.notification.showSuccess('Éxito', 'Docente registrado con éxito');
        console.log(message);
        this.router.navigate(['../listar'], { relativeTo: this.route });
      },
      (err) => {
        if (err.status === 0) {
          this.notification.showError(
            'Error',
            'Error de conexión con el servidor'
          );
        } else {
          this.notification.showError('Error', err.error.error);
          console.log(err);
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

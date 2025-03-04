import { ClsFormUpdateDocente } from '@/app/core/classForm/cls-form-docente';
import { InterfaceInstitution } from '@/app/core/interfaces/interface-institution';
import { EvaluatorRole } from '@/app/core/interfaces/interface-roleEvaluator';
import { DocenteService } from '@/app/shared/services/api/docente.service';
import { InstitutionService } from '@/app/shared/services/api/institution.service';
import { ControlErrorService } from '@/app/shared/services/utils/controlErrorService';
import { NotificationsService } from '@/app/shared/services/utils/notifications.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css'],
})
export class EditarComponent implements OnInit {
  public formDocente = new ClsFormUpdateDocente();
  public instituciones: InterfaceInstitution[] = [];
  public teacher?: EvaluatorRole;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public id: any;

  constructor(
    private institutionService: InstitutionService,
    public controlError: ControlErrorService,
    public notification: NotificationsService,
    private teacherService: DocenteService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.formDocente.form.reset();
    this.getInstitutions();
    this.getTeacher();
  }

  update() {
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

    if (nameInstitucion=== null || nameInstitucion === '0') {
      this.notification.showError('Error', 'Debe seleccionar una institución');
      return;
    }
    
    this.teacherService.updateTeacher(this.id, body).subscribe(
      (res) => {
        const { message } = res;
        this.notification.showSuccess('Actualizado', 'Docente actualizado con éxito');
        this.router.navigate(['../../listar'], { relativeTo: this.route });
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

  getTeacher() {
    this.teacherService.getTeacher(this.id).subscribe(
      (res) => {
        const { message, data } = res;
        this.teacher = data;
        this.setValuesTeacher(this.teacher);
        console.log(message);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  setValuesTeacher(teacher: any) {
    this.formDocente.form.setValue({
      CI: teacher.CI,
      name: teacher.name,
      lastName: teacher.lastName,
      address: teacher.address,
      phone: teacher.phone,
      email: teacher.email,
      nameInstitucion: teacher.nameInstitution,
    });
    this.formDocente.form
      .get('institucion')
      ?.patchValue(teacher.nameInstitution);
    this.formDocente.form.markAllAsTouched();
  }

  getInstitutions() {
    this.institutionService.getAllInstitution().subscribe((res) => {
      const { message, data } = res;
      this.instituciones = data;
      console.log(message);
    });
  }

  cancel() {
    this.router.navigate(['../../listar'], { relativeTo: this.route });
  }
}

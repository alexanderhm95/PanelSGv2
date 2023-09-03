import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CasosService } from '@/app/shared/services/api/casos.service';
import { TestCasoEstudianteService } from '@/app/shared/services/api/test-caso-estudiante.service';
import { TestCasoTeacherService } from '@/app/shared/services/api/test-caso-teacher.service';
import { NotificationsService } from '@/app/shared/services/utils/notifications.service';
import { environment } from '@/environments/environment';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent implements OnInit {

  public api = `${environment.api}/api/1.0/testStudent/reporte/`;
  public id: any;
  public modalActivate = false;
  public modalActivate2 = false;
  public listaRespuestas: Respuestas[] = [];
  public circumference: any = ((2 * 22) / 7) * 120;
  public loading = true;
  public caso: any = {};

  private unsubscribe$ = new Subject<void>();

  constructor(
    private testEstudiante: TestCasoEstudianteService,
    private testTeacher: TestCasoTeacherService,
    private notification: NotificationsService,
    private serviceCaso: CasosService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getCaso();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private getCaso(): void {
    this.serviceCaso.getReporte(this.id)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(
        res => this.handleSuccess(res),
        err => this.handleError(err)
      );
  }

  private handleSuccess(res: any): void {
    const { message, data } = res;
    this.caso = data;
    this.loading = false;
    console.log(message);
  }

  private handleError(error: any): void {
    this.loading = false;
    if (error.status === 0) {
      this.notification.showError('Error', 'No se pudo conectar con el servidor');
    } else {
      this.notification.showError('Error', error.error.error);
    }
    console.log(error);
  }

  public getColor(porcentaje: number): string {
    if (porcentaje > 70) return 'red';
    if (porcentaje > 50) return 'yellow';
    return 'green';
  }

  openModal(id: string) {
    this.modalActivate = true;
    this.testEstudiante.getTestStudent(id).subscribe(
      (res) => {
        console.log(res);
        this.listaRespuestas = res.answers;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  openModal2(id: string) {
    this.modalActivate2 = true;
    this.testTeacher.getTestTeacher(id).subscribe(
      (res) => {
        console.log(res);
        this.listaRespuestas = res;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  closeModal() {
    this.modalActivate = false;
    this.modalActivate2 = false;
    this.listaRespuestas = [];
  }

  goBack() {
    this.router.navigate(['../../listar'], { relativeTo: this.route });
  }

}

interface Respuestas {
  id?: string;
  refImages?: string;
  name?: string;
  valueAnswer?: number;
  value?: number;
}

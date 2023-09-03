import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { InterfaceCaso } from '@/app/core/interfaces/interface-caso';
import { CasosService } from '@/app/shared/services/api/casos.service';
import { TestQuestionService } from '@/app/shared/services/api/test-question.service';
import { NotificationsService } from '@/app/shared/services/utils/notifications.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css'],
  providers: [DatePipe],
})

export class EditarComponent implements OnInit {
  private readonly onDestroy = new Subject<void>();

  public test: any[] = [];
  public answers: any[] = [];
  public date?: Date;
  public caso?: InterfaceCaso;
  public id: string | null = null;
  public answersForm = true;
  public loading = true;


  constructor(
    private questionService: TestQuestionService,
    private notification: NotificationsService,
    private casoService: CasosService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.date = new Date();
    this.id = this.route.snapshot.paramMap.get('id');
    this.getCaso();
  }

  ngOnDestroy(): void {
    this.onDestroy.next();
    this.onDestroy.complete();
  }

  private handleError(error: any): void {
    this.loading = false;
    const title = 'Error';
    const message = error.status === 0 ? 'Error de conexión con el servidor' : error.error.error;
    this.notification.showError(title, message);
  }


  private createRespuestas(): Respuesta[] {
    return Object.entries(this.answers).map(([key, value]) => ({
      refQuestion: key,
      valueAnswer: parseInt(value, 10),
    }));
  }

  checkFormValidity(): void {
    const respuestas = this.createRespuestas();
    this.answersForm = respuestas.length !== this.test.length;
  }


  create(): void {
    const respuestas = this.createRespuestas();

    if (respuestas.length < this.test.length) {
      this.notification.showError('Error', 'Debe completar todos los campos');
      return;
    }

    const body = {
      ciStudent: this.caso?.ciStudent,
      ciTeacher: this.caso?.ciTeacher,
      answers: respuestas,
    };

    this.casoService.createTestTeacher(body)
      .pipe(takeUntil(this.onDestroy))
      .subscribe(
        (res) => {
          this.notification.showSuccess('Registro', 'Evaluación completada con éxito');
          this.router.navigate(['../../listar'], { relativeTo: this.route });
        },
        (error) => this.handleError(error)
      );
  }


  getCaso(): void {
    this.casoService.getCaso(this.id)
      .pipe(takeUntil(this.onDestroy))
      .subscribe(
        (res) => {
          this.caso = res.data;
          this.getTest();
        },
        (error) => this.handleError(error)
      );
  }

  getTest(): void {
    this.questionService.getAllQuestion()
      .pipe(takeUntil(this.onDestroy))
      .subscribe(
        (res) => {
          this.test = res.data;
          this.loading = false;
        },
        (error) => this.handleError(error)
      );
  }
}

interface Respuesta {
  refQuestion: string;
  valueAnswer: number;
}
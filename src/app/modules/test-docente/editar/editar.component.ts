/* eslint-disable @typescript-eslint/no-explicit-any */
import { InterfaceCaso } from '@/app/core/interfaces/interface-caso';
import { CasosService } from '@/app/shared/services/api/casos.service';
import { TestQuestionService } from '@/app/shared/services/api/test-question.service';
import { NotificationsService } from '@/app/shared/services/utils/notifications.service';
import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css'],
  providers: [DatePipe],
})
export class EditarComponent implements OnInit {
  public test: any[] = [];
  public answers: any[] = [];
  public date?: Date;
  public caso?: InterfaceCaso;
  public id: any;

  constructor(
    private questionService: TestQuestionService,
    private notification: NotificationsService,
    private casoService: CasosService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.date = new Date();
    this.id = this.route.snapshot.paramMap.get('id');
    this.getCaso();
    this.getTest();
  }

  create() {
    const respuestas: Respuesta[] = Object.entries(this.answers).map(
      ([key, value]) => ({
        refQuestion: key,
        valueAnswer: parseInt(value, 10),
      })
    );

    const body = {
      ciStudent: this.caso?.ciStudent,
      ciTeacher: this.caso?.ciTeacher,
      answers: respuestas,
    };

    this.casoService.createTestTeacher(body).subscribe(
      (res) => {
        const { message } = res;
        console.log(message);
        this.router.navigate(['../../listar'], { relativeTo: this.route });
      },
      (error) => {
        if (error.status === 0) {
          this.notification.showError(
            'Error',
            'Error de conexión con el servidor'
          );
        } else {
          this.notification.showError(
            'Error',
            'Error al guardar los datos del test'
          );
        }
      }
    );
  }

  getCaso() {
    this.casoService.getCaso(this.id).subscribe(
      (res) => {
        const { message, data } = res;
        this.caso = data;
        console.log(message);
      },
      (error) => {
        if (error.status === 0) {
          this.notification.showError(
            'Error',
            'Error de conexión con el servidor'
          );
        } else {
          this.notification.showError(
            'Error',
            'Error al obtener los datos del caso'
          );
        }
      }
    );
  }

  getTest() {
    this.questionService.getAllQuestion().subscribe(
      (res) => {
        const { message, data } = res;
        this.test = data;
        console.log(res);
        console.log(message);
      },
      (error) => {
        if (error.status === 0) {
          this.notification.showError(
            'Error',
            'Error de conexión con el servidor'
          );
        } else {
          this.notification.showError('Error', 'Error al cargar las preguntas');
        }
      }
    );
  }
}

interface Respuesta {
  refQuestion: string;
  valueAnswer: number;
}

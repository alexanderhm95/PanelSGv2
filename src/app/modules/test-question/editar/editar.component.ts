import {
  ClsFormRespuestas,
  ClsFormTestQuestion,
} from '@/app/core/classForm/cls-form-test-question';
import { InterfaceQuestion } from '@/app/core/interfaces/interface-question';
import { TestQuestionService } from '@/app/shared/services/api/test-question.service';
import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css'],
})
export class EditarComponent {
  public modalActivate: Boolean = false;
  public formRespuesta = new ClsFormRespuestas();
  public formPreguntas = new ClsFormTestQuestion();
  public listaRespuestas: Respuestas[] = [];

  private testQuestion!: InterfaceQuestion;
  private id: any;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private questionService: TestQuestionService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.formRespuesta.form.reset();
    this.formPreguntas.form.reset();
    this.id = this.route.snapshot.paramMap.get('id');
    this.getTest();
  }

  getTest() {
    this.questionService.getQuestion(this.id).subscribe(
      (data) => {
        this.testQuestion = data;
        console.log(this.testQuestion);
        this.setValues(this.testQuestion);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  setValues(testQuestion: InterfaceQuestion) {
    this.formPreguntas.form.patchValue({ name: testQuestion.nameQuestion });
    this.formPreguntas.form.patchValue({
      description: testQuestion.descriptionQuestion,
    });
    //Aqui recorro testQuestion.answer y lo agrego a la listaRespuestas junto a un id segun la posicion
    for (let i = 0; i < testQuestion.answer.length; i++) {
      const id = i + 1;
      const respuesta: Respuestas = {
        id,
        nameAnswer: testQuestion.answer[i].nameAnswer,
        valueAnswer: testQuestion.answer[i].valueAnswer,
      };
      this.listaRespuestas.push(respuesta);
    }
    this.formPreguntas.form.markAllAsTouched();
  }

  update() {
    this.testQuestion = {
      nameQuestion: this.formPreguntas.form.value.name,
      descriptionQuestion: this.formPreguntas.form.value.descripcion,
      answer: this.listaRespuestas,
    };

    this.questionService.updateQuestion(this.id, this.testQuestion).subscribe(
      (data) => {
        this.router.navigate(['../../listar'], { relativeTo: this.route });
      },
      (error) => {
        console.log(error);
      }
    );
  }

  openModal() {
    this.modalActivate = true;
  }

  closeModal() {
    this.modalActivate = false;
  }

  addRespuesta() {
    const id = this.listaRespuestas.length + 1;
    const respuesta: Respuestas = {
      id,
      nameAnswer: this.formRespuesta.form.value.nameAnswer,
      valueAnswer: this.formRespuesta.form.value.valueAnswer,
    };

    this.listaRespuestas.push(respuesta);
    this.changeDetectorRef.detectChanges();
    this.formRespuesta.form.reset();
    this.closeModal();
  }

  deleteRespuesta(id: number) {
    this.listaRespuestas = this.listaRespuestas.filter(
      (tarjeta) => tarjeta.id! === id
    );
  }

  cancel() {
    this.router.navigate(['../../listar'], { relativeTo: this.route });
  }
}

interface Respuestas {
  id: number;
  nameAnswer: string;
  valueAnswer: number;
}

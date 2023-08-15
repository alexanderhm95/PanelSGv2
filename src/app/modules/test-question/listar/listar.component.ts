import { InterfaceQuestion } from '@/app/core/interfaces/interface-question';
import { FilterTablesPipe } from '@/app/shared/pipes/filter-tables.pipe';
import { TestQuestionService } from '@/app/shared/services/api/test-question.service';
import { NotificationsService } from '@/app/shared/services/utils/notifications.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css'],
  providers: [FilterTablesPipe],
})
export class ListarComponent {
  question: InterfaceQuestion[] = [];
  public search: string = '';
  public loading = true;

  constructor(
    private questionService: TestQuestionService,
    private notification: NotificationsService,
  ) {}

  ngOnInit(): void {
    this.questionService.getAllQuestion().subscribe((res) => {
      const { message, data } = res;
      this.question = data;
      this.loading = false;
      console.log(message);
    },
    (error) => {
      if (error.status === 0) {
        this.notification.showError(
          'Error',
          'Error de conexión con el servidor, inténtelo mas tarde'
        );
      } else {
        this.notification.showError('Error', error.error.error);
      }
    }
    );
  }

 


  delete(id: any) {
    this.notification
      .showConfirm(
        'warning',
        'Peligro',
        '¿Está seguro de eliminar la pregunta?',
        'Eliminar',
        'Cancelar'
      )
      .then((result) => {
        if (result.isConfirmed) {
          this.questionService.deleteQuestion(id).subscribe(
            (res) => {
              const { message } = res;
              this.notification.showSuccess(
                'Eliminado',
                'Pregunta eliminada correctamente'
              );
              console.log(message);
              this.ngOnInit();
            },
            (err) => {
              console.log(err);
              this.ngOnInit()
              this.notification.showError(
                'Error',
                'No se pudo eliminar la pregunta'
              );
            }
          );
        }
      });
  }
}

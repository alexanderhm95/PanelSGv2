import { InterfaceTestEstudiante } from '@/app/core/interfaces/test-estudiante';
import { FilterTablesPipe } from '@/app/shared/pipes/filter-tables.pipe';
import { TestEstudianteService } from '@/app/shared/services/api/test-estudiante.service';
import { NotificationsService } from '@/app/shared/services/utils/notifications.service';
import { environment } from '@/environments/environment';
import { NgOptimizedImage, provideImgixLoader } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css'],
  providers: [
    FilterTablesPipe,
    NgOptimizedImage,
    provideImgixLoader(environment.api + '/api/1.0'),
  ],
})
export class ListarComponent implements OnInit {
  public api = environment.api + '/api/1.0';
  public search = '';
  public loading = true;
  public currentPage = 0;
  public pageSize = 0;
  public totalPages = 0;
  isButtonPressed: boolean = false;

  preguntas: InterfaceTestEstudiante[] = [];

  constructor(
    private preguntaService: TestEstudianteService,
    private notification: NotificationsService
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  nextPage(): void {
    this.currentPage++;
    this.getData();
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.getData();
    }
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent): void {
    console.log('Entre a la derecha');
    if (event.key === 'ArrowRight' && this.currentPage<this.totalPages) {
      console.log('Me voy a  DER');
      this.isButtonPressed = true;
      this.nextPage();
    }

    this.isButtonPressed = false;
  }

  @HostListener('window:keyup', ['$event'])
  handleKeyUp(event: KeyboardEvent): void {
    if (event.key === 'ArrowLeft' && this.currentPage>1) {
      console.log('Me voy a  IZQ');
      this.isButtonPressed = true;
      this.previousPage();
    }

    this.isButtonPressed = false;
  }

  getData(): void {
    this.loading = true;
    this.preguntaService
      .getAllPreguntaPaginated(this.currentPage, this.pageSize)
      .subscribe(
        (res) => {
          const { message, data } = res;
          this.preguntas = data.testImages.docs;
          this.currentPage = data.testImages.page;
          this.totalPages = data.testImages.totalPages; // Calcular el número total de páginas
          this.loading = false;
          console.log(message);
        },
        (err) => {
          console.log('Error:', err.error);
          this.loading = false;
          this.notification.showError('Error', 'No se pudo obtener el test');
        }
      );
  }

  delete(id: any) {
    this.notification
      .showConfirm(
        'warning',
        'Peligro',
        'Estas seguro de eliminar la pregunta?',
        'Si, eliminar!',
        'No, cancelar!'
      )
      .then((result) => {
        if (result.isConfirmed) {
          this.preguntaService.deletePregunta(id).subscribe(
            (res) => {
              const { message } = res;
              this.notification.showSuccess(
                'Éxito',
                'Pregunta eliminada correctamente'
              );
              console.log(message);
              this.ngOnInit();
            },
            (err) => {
              console.log(err);
              this.ngOnInit();
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

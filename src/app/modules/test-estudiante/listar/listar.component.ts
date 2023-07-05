import { InterfaceTestEstudiante } from '@/app/core/interfaces/test-estudiante';
import { FilterTablesPipe } from '@/app/shared/pipes/filter-tables.pipe';
import { TestEstudianteService } from '@/app/shared/services/api/test-estudiante.service';
import { environment } from '@/environments/environment';
import { NgOptimizedImage, provideImgixLoader } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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

  preguntas: InterfaceTestEstudiante[] = [];

  constructor(private preguntaService: TestEstudianteService) {}

  ngOnInit(): void {
    this.preguntaService.getAllPregunta().subscribe((res) => {
      const { message, data } = res;
      this.preguntas = data;
      this.loading = false;
      console.log(message);
    });
  }

  refresh() {
    this.ngOnInit();
  }


  delete(id: any) {
    this.preguntaService.deletePregunta(id).subscribe(
      (res) => {
        const { message } = res;
        console.log(message);
        this.ngOnInit();
      },
      (err) => {
        console.log(err);
      }
    );
  }
}

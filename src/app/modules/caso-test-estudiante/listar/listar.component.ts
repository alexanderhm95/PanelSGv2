import { FilterTablesPipe } from '@/app/shared/pipes/filter-tables.pipe';
import { TestCasoEstudianteService } from '@/app/shared/services/api/test-caso-estudiante.service';
import { NotificationsService } from '@/app/shared/services/utils/notifications.service';
import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css'],
  providers: [DatePipe, FilterTablesPipe]
})
export class ListarComponent implements OnInit {

  public tests: any[] = [];
  public search = "";

  constructor(
    private serviceCasoEstudiante: TestCasoEstudianteService,
    private notification: NotificationsService
  ) { }

  ngOnInit(): void {
    this.serviceCasoEstudiante.getAll().subscribe(
      res => {
        const {message, data} = res
        this.tests = data;
        console.log(message);
      }
    )
  }

  deleteTest(id: any) {
    this.serviceCasoEstudiante.delete(id).subscribe(
      res => {
        console.log(res);
        this.ngOnInit();
      }
    )
  }


}

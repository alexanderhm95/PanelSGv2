import { FilterTablesPipe } from '@/app/shared/pipes/filter-tables.pipe';
import { TestDocenteService } from '@/app/shared/services/api/test-docente.service';
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
    private serviceCasoTeacher: TestDocenteService,
    private notification: NotificationsService
  ) { }

  ngOnInit(): void {
    this.serviceCasoTeacher.getAll().subscribe(
      res => {
        const {message, data} = res;
        this.tests = data;
        console.log(data);
        console.log(message);
      }, error => {
        if (error.status === 0) {
          this.notification.showError("Error", "Error de conexión con el servidor");
        }else{
          
          this.notification.showError("Error", "Error al cargar información");
        }
      }
    )
  }

  deleteTest(id: any) {
    this.serviceCasoTeacher.delete(id).subscribe(
      res => {
        console.log(res);
        this.ngOnInit();
      }
    )
  }


}

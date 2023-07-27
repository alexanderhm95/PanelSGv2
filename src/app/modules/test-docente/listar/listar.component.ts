/* eslint-disable @typescript-eslint/no-explicit-any */
import { FilterTablesPipe } from '@/app/shared/pipes/filter-tables.pipe';
import { AuthService } from '@/app/shared/services/api/auth.service';
import { CasosService } from '@/app/shared/services/api/casos.service';
import { NotificationsService } from '@/app/shared/services/utils/notifications.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css'],
  providers: [FilterTablesPipe],
})
export class ListarComponent implements OnInit {
  public casos: any[] = [];
  public selectedCasoValue: any;
  public loading = true;
  public search = '';
  private idUserTeacher? = '';

  constructor(
    private notification: NotificationsService,
    private authService: AuthService,
    private casoService: CasosService
  ) {}

  ngOnInit(): void {
    this.idUserTeacher = this.authService.getUserId();

    this.casoService.getAllCasosTeacher(this.idUserTeacher).subscribe(
      (res) => {
        const { message, data } = res;
        this.casos = data;
        this.loading = false;
        console.log(message);
        console.log(data);
      },(err) => {
        console.log('Error:', err.error);
        this.loading = false;
        this.notification.showError('Error', 'No se pudo obtener los casos');
      })
  }

  

}

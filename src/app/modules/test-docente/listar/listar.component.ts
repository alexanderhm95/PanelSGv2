/* eslint-disable @typescript-eslint/no-explicit-any */
import { AuthService } from '@/app/shared/services/api/auth.service';
import { CasosService } from '@/app/shared/services/api/casos.service';
import { NotificationsService } from '@/app/shared/services/utils/notifications.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css'],
})
export class ListarComponent implements OnInit {
  public casos: any[] = [];
  public selectedCasoValue: any;
  public loading = true;
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
      },
      (error) => {
        this.loading = true;

        if (error.status === 0) {

          this.ngOnInit();
          this.notification.showError(
            'Error',
            'Error de conexión con el servidor'
          );
        } else {

          this.ngOnInit();
          this.notification.showError('Error', 'Error al cargar casos');
        }
      }
    );
  }

  

}

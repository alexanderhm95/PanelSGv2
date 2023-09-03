/* eslint-disable @typescript-eslint/no-explicit-any */

import { FilterTablesPipe } from '@/app/shared/pipes/filter-tables.pipe';
import { AuthService } from '@/app/shared/services/api/auth.service';
import { CasosService } from '@/app/shared/services/api/casos.service';
import { NotificationsService } from '@/app/shared/services/utils/notifications.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css'],
  providers: [FilterTablesPipe],
})

export class ListarComponent implements OnInit, OnDestroy {
  public casos: any[] = [];
  public loading = true;
  public search = '';
  private idUserTeacher: string | undefined;
  private readonly onDestroy = new Subject<void>();


  constructor(
    private readonly notificationsService: NotificationsService,
    private readonly authService: AuthService,
    private readonly casosService: CasosService
  ) { }

  ngOnInit(): void {
    this.idUserTeacher = this.authService.getUserId();
    this.loadCasos(this.idUserTeacher);
  }

  private loadCasos(userId: string | undefined): void {
    this.casosService.getAllCasosTeacher(userId)
      .pipe(takeUntil(this.onDestroy))
      .subscribe(
        ({ message, data }) => {
          this.casos = data;
          this.loading = false;
          console.log(message);
        },
        (error) => this.handleError(error)
      );
  }

  private handleError(error: any): void {
    this.loading = false;
    const title = 'Error';
    const message = error.status===0 ? 'Error de conexión con el servidor' : error.error.error;
    this.notificationsService.showError(title, message);
  }

  ngOnDestroy(): void {
    this.onDestroy.next();
    this.onDestroy.complete();
  }

}

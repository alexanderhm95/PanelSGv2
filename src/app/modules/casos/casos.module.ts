import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CasosRoutingModule } from './casos-routing.module';
import { RegistrarComponent } from './registrar/registrar.component';
import { ListarComponent } from './listar/listar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReporteComponent } from './reporte/reporte.component';

@NgModule({
  declarations: [
    RegistrarComponent,
    ListarComponent,
    ReporteComponent
  ],
  imports: [
    

    CommonModule,
    CasosRoutingModule,
    ReactiveFormsModule,

  ]
})
export class CasosModule { }

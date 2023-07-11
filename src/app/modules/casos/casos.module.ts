import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CasosRoutingModule } from './casos-routing.module';
import { RegistrarComponent } from './registrar/registrar.component';
import { ListarComponent } from './listar/listar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReporteComponent } from './reporte/reporte.component';
import { RegistroDocenteComponent } from './registroDocente/registroDocente.component';

@NgModule({
  declarations: [
    RegistrarComponent,
    RegistroDocenteComponent,
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

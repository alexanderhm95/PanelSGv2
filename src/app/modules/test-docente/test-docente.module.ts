import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestDocenteRoutingModule } from './test-docente-routing.module';
import { EditarComponent } from './editar/editar.component';
import { ListarComponent } from './listar/listar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EditarComponent,
    ListarComponent
  ],
  imports: [
    CommonModule,
    TestDocenteRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class TestDocenteModule { }

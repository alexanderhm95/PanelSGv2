import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonasRoutingModule } from './personas-routing.module';
import { ListarComponent } from './listar/listar.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@/app/shared/shared.module';


@NgModule({
  declarations: [
    ListarComponent
  ],
  imports: [
    CommonModule,
    PersonasRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class PersonasModule { }

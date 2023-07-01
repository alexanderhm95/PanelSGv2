import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarComponent } from './editar/editar.component';
import { ListarComponent } from './listar/listar.component';
import { RegistrarComponent } from './registrar/registrar.component';

const routes: Routes = [
  {
    path: '',
    component:ListarComponent,
    pathMatch: 'full'
  },
  {
    path: 'registrar',
    component:RegistrarComponent
  },
  {
    path: 'editar/:id',
    component:EditarComponent
  },
  {
    path: 'listar',
    component:ListarComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeceRoutingModule { }

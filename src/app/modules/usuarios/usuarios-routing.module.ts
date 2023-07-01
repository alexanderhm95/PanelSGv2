import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
    path: 'listar',
    component:ListarComponent
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }

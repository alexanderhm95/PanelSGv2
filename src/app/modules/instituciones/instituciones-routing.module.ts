import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarInstitucionComponent } from './editar-institucion/editar-institucion.component';
import { ListarInstitucionComponent } from './listar-institucion/listar-institucion.component';
import { RegistrarInstitucionComponent } from './registrar-institucion/registrar-institucion.component';

const routes: Routes = [
{
  path:'',
  component:ListarInstitucionComponent,
  pathMatch:'full'
},
{
  path:'listar',
  component: ListarInstitucionComponent
},
{
  path:'registrar',
  component: RegistrarInstitucionComponent
},
{
  path:'editar/:id',
  component: EditarInstitucionComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstitucionesRoutingModule { }

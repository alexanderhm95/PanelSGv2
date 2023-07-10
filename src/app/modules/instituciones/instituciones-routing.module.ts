import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarInstitucionComponent } from './editar-institucion/editar-institucion.component';
import { ListarInstitucionComponent } from './listar-institucion/listar-institucion.component';
import { RegistrarInstitucionComponent } from './registrar-institucion/registrar-institucion.component';
import { AuthGuard } from '@/app/core/guards/auth.guard';

const routes: Routes = [
{
  path:'',
  component:ListarInstitucionComponent,
  pathMatch:'full',
  title: 'Institución',
},
{
  path:'listar',
  component: ListarInstitucionComponent,
  canActivate: [AuthGuard], 
  data: {
    requiredRole: 'ADMIN', // Especificar el rol requerido para acceder a la ruta
  },
  title: 'Institución',
},
{
  path:'registrar',
  component: RegistrarInstitucionComponent,
  canActivate: [AuthGuard], 
  data: {
    requiredRole: 'ADMIN', // Especificar el rol requerido para acceder a la ruta
  },
  title: 'Institución',
},
{
  path:'editar/:id',
  component: EditarInstitucionComponent,
  canActivate: [AuthGuard], 
  data: {
    requiredRole: 'ADMIN', // Especificar el rol requerido para acceder a la ruta
  },
  title: 'Institución',
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstitucionesRoutingModule { }

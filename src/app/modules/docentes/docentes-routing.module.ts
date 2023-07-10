import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarComponent } from './editar/editar.component';
import { ListarComponent } from './listar/listar.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { AuthGuard } from '@/app/core/guards/auth.guard';

const routes: Routes = [
  {
    path:'',
    component:ListarComponent,
    pathMatch: 'full',
  title: 'Decente',
  },
  {
    path:'listar',
    component: ListarComponent,
    canActivate: [AuthGuard], 
    data: {
      requiredRole: 'ADMIN', // Especificar el rol requerido para acceder a la ruta
    },
    title: 'Decente',
  },
  {
    path:'registrar',
    component: RegistrarComponent,
    canActivate: [AuthGuard], 
    data: {
      requiredRole: 'ADMIN', // Especificar el rol requerido para acceder a la ruta
    },
    title: 'Decente',
  },
  {
    path:'editar/:id',
    component: EditarComponent,
    canActivate: [AuthGuard], 
    data: {
      requiredRole: 'ADMIN', // Especificar el rol requerido para acceder a la ruta
    },
    title: 'Decente',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocentesRoutingModule { }

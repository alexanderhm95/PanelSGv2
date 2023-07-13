import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './listar/listar.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { ReporteComponent } from './reporte/reporte.component';
import { AuthGuard } from '@/app/core/guards/auth.guard';
import { RegistroDocenteComponent } from './registroDocente/registroDocente.component';

const routes: Routes = [

  {
    path: 'listar',
    component: ListarComponent,
    canActivate: [AuthGuard], 
    data: {
      requiredRole: 'DECE', // Especificar el rol requerido para acceder a la ruta
    },
    title: 'Casos',
  },
  {
    path: 'registrar',
    component: RegistrarComponent,
    canActivate: [AuthGuard], 
    data: {
      requiredRole: 'DECE', // Especificar el rol requerido para acceder a la ruta
    },
    title: 'Casos',
  },
  {
    path: 'registro',
    component: RegistroDocenteComponent,
    canActivate: [AuthGuard], 
    data: {
      requiredRole: 'DECE', // Especificar el rol requerido para acceder a la ruta
    },
    title: 'Casos',
  },
  {
    path: 'reporte/:id',
    component: ReporteComponent,
    canActivate: [AuthGuard], 
    data: {
      requiredRole: 'DECE', // Especificar el rol requerido para acceder a la ruta
    },
    title: 'Casos',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CasosRoutingModule {}

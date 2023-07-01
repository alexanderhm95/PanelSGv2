import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './listar/listar.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { ReporteComponent } from './reporte/reporte.component';

const routes: Routes = [

  {
    path:'',
    component:ListarComponent,
    pathMatch:'full'
  },
  {
    path:'listar',
    component: ListarComponent
  },
  {
    path:'registrar',
    component: RegistrarComponent
  },
  {
    path:'reporte/:id',
    component: ReporteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CasosRoutingModule { }

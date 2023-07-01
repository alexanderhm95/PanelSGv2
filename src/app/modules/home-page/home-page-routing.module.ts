import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'usuarios',
    loadChildren: () => import('../usuarios/usuarios.module').then(m => m.UsuariosModule),
    title: 'Usuarios',
   
  },
  {
    path: 'casos',
    loadChildren: () => import('../casos/casos.module').then(m => m.CasosModule),
    title: 'Casos'
  },
  {
    path: 'institucion',
    loadChildren: () => import('../instituciones/instituciones.module').then(m => m.InstitucionesModule),
    title: 'Institución'
  },
  {
    path: 'dece',
    loadChildren: () => import('../dece/dece.module').then(m => m.DeceModule),
    title: 'DECE'
  },
  {
    path: 'docente',
    loadChildren: () => import('../docentes/docentes.module').then(m => m.DocentesModule),
    title: 'Docente'
  },
  {
    path: 'estudiante',
    loadChildren: () => import('../estudiantes/estudiantes.module').then(m => m.EstudiantesModule),
    title: 'Estudiante'
  }, {
    path: 'personas',
    loadChildren: () => import('../personas/personas.module').then(m => m.PersonasModule),
    title: 'Personas'
  },
  {
    path: 'test/estudiante',
    loadChildren: () => import('../test-estudiante/test-estudiante.module').then(m => m.TestEstudianteModule),
    title: 'Test Estudiante'
  },
  {
    path: 'test/question',
    loadChildren: () => import('../test-question/test-question.module').then(m => m.TestQuestionModule),
    title: 'Test Question'
  },
  {
    path: 'test/docente',
    loadChildren: () => import('../test-docente/test-docente.module').then(m => m.TestDocenteModule),
    title: 'Docente'
  },
  {
    path: 'caso/estudiante',
    loadChildren: () => import('../caso-test-estudiante/caso-test-estudiante.module').then(m => m.CasoTestEstudianteModule),
    title: 'Test Estudiantes'
  },
  {
    path: 'caso/docente',
    loadChildren: () => import('../caso-test-docente/caso-test-docente.module').then(m => m.CasoTestDocenteModule),
    title: 'Test Docentes'
  }



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }

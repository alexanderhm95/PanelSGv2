import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from '@/app/core/guards/auth.guard';

const routes: Routes = [
  {
    path: 'usuarios',
    loadChildren: () =>
      import('../usuarios/usuarios.module').then((m) => m.UsuariosModule),
    canActivate: [AuthGuard], // Proteger la ruta con el guard de ruta
    data: {
      requiredRole: 'ADMIN', // Especificar el rol requerido para acceder a la ruta
    },
    title: 'Usuarios',
  },
  {
    path: 'casos',
    loadChildren: () =>
      import('../casos/casos.module').then((m) => m.CasosModule),
    canActivate: [AuthGuard], // Proteger la ruta con el guard de ruta
    data: {
      requiredRole: 'DECE', // Especificar el rol requerido para acceder a la ruta
    },
    title: 'Casos',
  },
  {
    path: 'institucion',
    loadChildren: () =>
      import('../instituciones/instituciones.module').then(
        (m) => m.InstitucionesModule
      ),
    canActivate: [AuthGuard], // Proteger la ruta con el guard de ruta
    data: {
      requiredRole: 'ADMIN', // Especificar el rol requerido para acceder a la ruta
    },
    title: 'Institución',
  },
  {
    path: 'dece',
    loadChildren: () => import('../dece/dece.module').then((m) => m.DeceModule),
    canActivate: [AuthGuard], // Proteger la ruta con el guard de ruta
    data: {
      requiredRole: 'ADMIN', // Especificar el rol requerido para acceder a la ruta
    },
    title: 'DECE',
  },
  {
    path: 'docente',
    loadChildren: () =>
      import('../docentes/docentes.module').then((m) => m.DocentesModule),
    canActivate: [AuthGuard], // Proteger la ruta con el guard de ruta
    data: {
      requiredRole: 'ADMIN', // Especificar el rol requerido para acceder a la ruta
    },
    title: 'Docente',
  },
  {
    path: 'estudiante',
    loadChildren: () =>
      import('../estudiantes/estudiantes.module').then(
        (m) => m.EstudiantesModule
      ),
    canActivate: [AuthGuard], // Proteger la ruta con el guard de ruta
    data: {
      requiredRole: 'ADMIN', // Especificar el rol requerido para acceder a la ruta
    },
    title: 'Estudiante',
  },
  {
    path: 'personas',
    loadChildren: () =>
      import('../personas/personas.module').then((m) => m.PersonasModule),
    canActivate: [AuthGuard], // Proteger la ruta con el guard de ruta
    data: {
      requiredRole: 'ADMIN', // Especificar el rol requerido para acceder a la ruta
    },
    title: 'Personas',
  },
  {
    path: 'test/estudiante',
    loadChildren: () =>
      import('../test-estudiante/test-estudiante.module').then(
        (m) => m.TestEstudianteModule
      ),
    canActivate: [AuthGuard], // Proteger la ruta con el guard de ruta
    data: {
      requiredRole: 'ADMIN', // Especificar el rol requerido para acceder a la ruta
    },
    title: 'Test Estudiante',
  },
  {
    path: 'test/question',
    loadChildren: () =>
      import('../test-question/test-question.module').then(
        (m) => m.TestQuestionModule
      ),
    canActivate: [AuthGuard], // Proteger la ruta con el guard de ruta
    data: {
      requiredRole: 'ADMIN', // Especificar el rol requerido para acceder a la ruta
    },
    title: 'Test Question',
  },
  {
    path: 'test/docente',
    loadChildren: () =>
      import('../test-docente/test-docente.module').then(
        (m) => m.TestDocenteModule
      ),
    canActivate: [AuthGuard], // Proteger la ruta con el guard de ruta
    data: {
      requiredRole: 'TEACHER', // Especificar el rol requerido para acceder a la ruta
    },
    title: 'Docente',
  },
  {
    path: 'caso/estudiante',
    loadChildren: () =>
      import('../caso-test-estudiante/caso-test-estudiante.module').then(
        (m) => m.CasoTestEstudianteModule
      ),
    canActivate: [AuthGuard], // Proteger la ruta con el guard de ruta
    data: {
      requiredRole: 'DECE', // Especificar el rol requerido para acceder a la ruta
    },
    title: 'Test Estudiantes',
  },
  {
    path: 'caso/docente',
    loadChildren: () =>
      import('../caso-test-docente/caso-test-docente.module').then(
        (m) => m.CasoTestDocenteModule
      ),
    canActivate: [AuthGuard], // Proteger la ruta con el guard de ruta
    data: {
      requiredRole: 'DECE', // Especificar el rol requerido para acceder a la ruta
    },
    title: 'Test Docentes',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}

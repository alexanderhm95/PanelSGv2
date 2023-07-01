import { HomeComponent } from './modules/home-page/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SessionGuard } from './core/guards/session.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule),
    title: 'Login'
  },
  {
    path: 'home',
    component: HomeComponent,
    loadChildren: () => import('./modules/home-page/home-page.module').then(m => m.HomePageModule),
    canActivate: [SessionGuard],
    title: 'Inicio'
  },
  //rutas desconocidas
  {
    path: '**',
    redirectTo: 'auth/login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

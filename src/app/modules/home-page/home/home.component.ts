import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/api/auth.service';

interface MenuItem {
  name: string;
  icon: string;
  router: string[];
  role: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  // Variables for the menu
  public mainMenu: MenuItem[] = [];
  // Active or inactive menu
  public mostrarDiv = true;
  // Show or hide menu
  public isOpen = false;
  // Variables of user only
  public institution?: string;
  public name?: string;
  public role?: string;
  public id?: string;

  constructor(private serviceAuth: AuthService) {}

  ngOnInit(): void {
    this.id = this.serviceAuth.getUserId();
    this.name = this.serviceAuth.getUserName();
    this.role = this.serviceAuth.getUserRole();
    this.institution = this.serviceAuth.getInstitution();
    this.buildMenu();
  }

  // Build the menu
  buildMenu() {
    this.mainMenu = [
      {
        name: 'Usuarios',
        icon: 'fa fa-user',
        router: ['usuarios', 'listar'],
        role: 'ADMIN',
      },
      {
        name: 'Estudiantes',
        icon: 'fa fa-child',
        router: ['estudiante', 'listar'],
        role: 'ADMIN',
      },
      {
        name: 'Casos',
        icon: 'fa fa-building',
        router: ['casos', 'listar'],
        role: 'DECE',
      },
      {
        name: 'Instituciones',
        icon: 'fa fa-building',
        router: ['institucion', 'listar'],
        role: 'ADMIN',
      },
      {
        name: 'DECE',
        icon: 'fa fa-building',
        router: ['dece', 'listar'],
        role: 'ADMIN',
      },
      {
        name: 'Docentes',
        icon: 'fa fa-building',
        router: ['docente', 'listar'],
        role: 'ADMIN',
      },
      {
        name: 'Docentes',
        icon: 'fa-solid fa-chalkboard-user',
        router: ['test', 'docente', 'listar'],
        role: 'TEACHER',
      },
      {
        name: 'Test Estudiantes',
        icon: 'fas fa-list-check',
        router: ['test', 'estudiante', 'listar'],
        role: 'ADMIN',
      },
      {
        name: 'Test Docentes',
        icon: 'fas fa-list-check',
        router: ['test', 'question', 'listar'],
        role: 'ADMIN',
      },
      {
        name: 'Test Estudiantes',
        icon: 'fas fa-list-check',
        router: ['caso', 'estudiante', 'listar'],
        role: 'DECE',
      },
      {
        name: 'Test Docentes',
        icon: 'fas fa-list-check',
        router: ['caso', 'docente', 'listar'],
        role: 'DECE',
      },
    ];
  }

  //closed session delete cookie and redirect to login
  logouth() {
    this.serviceAuth.logout();
  }

  //closed menu in mobile devices
  toggleMenu() {
    this.isOpen = !this.isOpen;
  }
}

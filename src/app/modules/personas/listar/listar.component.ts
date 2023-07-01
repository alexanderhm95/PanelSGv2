import { InterfacePersona } from '@/app/core/interfaces/interface-persona';
import { FilterTablesPipe } from '@/app/shared/pipes/filter-tables.pipe';
import { PersonaService } from '@/app/shared/services/api/persona.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css'],
  providers: [FilterTablesPipe],
})
export class ListarComponent implements OnInit {
  public personas: InterfacePersona[] = [];

  public search = '';

  constructor(private personaService: PersonaService) {}

  ngOnInit(): void {
    this.personaService.getAllPersona().subscribe(
      (res) => {
        this.personas = res;
        console.log(this.personas);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  deletePersona(id: any) {
    this.personaService.deletePersona(id).subscribe(
      (res) => {
        this.ngOnInit();
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}

interface Usuario {
  nombre: string;
  rol: string;
}

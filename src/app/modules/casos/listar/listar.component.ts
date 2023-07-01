import { InterfaceCaso } from '@/app/core/interfaces/interface-caso';
import { CasosService } from '@/app/shared/services/api/casos.service';
import { StudentService } from '@/app/shared/services/api/student.service';
import { environment } from '@/environments/environment';
import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css'],
  providers: [DatePipe],
})
export class ListarComponent implements OnInit {
  public api = environment.api + '/api/1.0';

  public casos: any[] = [];
  public codigo = 0;
  public modalActivate = false;

  constructor(
    private casoService: CasosService,
    private studentService: StudentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.casoService.getAllCaso().subscribe(
      (res) => {
        const { message, data } = res;
        this.casos = data;
        console.log(this.casos)
        console.log(message);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  // testStudent(CI: string) {
  //   console.log(CI);
  //   const body = {
  //     CI: CI,
  //   };
  //   this.studentService.generateCode(body).subscribe((res) => {
  //     const { data } = res;
  //     this.codigo = data;
  //     console.log(data);
  //     this.ngOnInit();
  //   });
  // }

  closeModal() {
    this.modalActivate = false;
    this.codigo = 0;
  }

  openModal(CI: string) {
    console.log(CI);
    const body = {
      CI: CI,
    };
    this.studentService.generateCode(body).subscribe((res) => {
      const { data } = res;
      this.codigo = data;
      console.log(data);
      this.ngOnInit();
    });

    this.modalActivate = true;
  }

  deleteCaso(id: string) {
    this.casoService.deleteCaso(id).subscribe((res) => {
      console.log(res);
      this.ngOnInit();
    });
  }
}

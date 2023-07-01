import { CasosService } from '@/app/shared/services/api/casos.service';
import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css'],
  providers: [DatePipe],
})
export class ReporteComponent implements OnInit {
  public id: any;

  public caso: any = {};
  public circumference: any = ((2 * 22) / 7) * 120;

  constructor(
    private serviceCaso: CasosService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getCaso();
  }

  getCaso() {
    this.serviceCaso.getCaso(this.id).subscribe(
      (res) => {
        const { message, data } = res;
        this.caso = data;
        console.log(message);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  public getColor(porcentaje: number): string {
    if (porcentaje > 70) {
      return 'red';
    } else if (porcentaje > 50) {
      return 'yellow';
    } else {
      return 'green';
    }
  }
}

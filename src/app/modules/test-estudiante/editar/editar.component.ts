import { ClsFormTestEstudiante } from '@/app/core/classForm/cls-form-test-estudiante';
import { TestEstudianteService } from '@/app/shared/services/api/test-estudiante.service';
import { ImageValidatorService } from '@/app/shared/services/utils/image-validator.service';
import { environment } from '@/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css'],
})
export class EditarComponent implements OnInit {
  public api = environment.api + '/api/1.0';
  public formTestImages = new ClsFormTestEstudiante();
  private testImages?: any;
  private srcImage = '';
  private imagenTest?: File;
  public imageUrl = '';
  private id: string | null = '';

  constructor(
    private testService: TestEstudianteService,
    private imageService: ImageValidatorService,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.formTestImages.form.reset();
    this.id = this.route.snapshot.paramMap.get('id');
    this.getTest();
  }

  getTest() {
    this.testService.getPregunta(this.id).subscribe(
      (data) => {
        this.testImages = data;
        console.log(data);
        this.setValues(this.testImages);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  obtenerImagen(id: string): Observable<Blob> {
    return this.http.get(id as string, { responseType: 'blob' });
  }

  setValues(data: any) {
    this.formTestImages.form.patchValue({ name: data.name });
    this.formTestImages.form.patchValue({ valor: data.value });
    this.formTestImages.form.patchValue({ section: data.section });
    let dataImage = data.link.split('/');

    console.log(dataImage);
    this.obtenerImagen(this.api + data.link).subscribe((imagenData: Blob) => {
      // Cambio de nombre a la variable
      console.log('traje a:', imagenData);
      const file = new File([imagenData], dataImage[dataImage.length - 1], {
        type: imagenData.type,
      });
      console.log(file);
      this.imagenTest = file;

      this.srcImage = '/public/TestImagenes/' + this.imagenTest.name;
      const srcImages = URL.createObjectURL(imagenData);
      this.imageUrl = srcImages;
      this.formTestImages.form.get('imagen')?.setValue(this.srcImage);
    });

    this.formTestImages.form.markAllAsTouched();
  }

  update() {
    this.testImages = {
      name: this.formTestImages.form.value.name,
      urlImage: this.srcImage,
      value: this.formTestImages.form.value.value,
      section: this.formTestImages.form.value.section,
    };

    const formData = new FormData();
    formData.append('singleFile', this.imagenTest as File);
    formData.append('data', JSON.stringify(this.testImages));

    this.testService.updatePregunta(this.id, formData).subscribe(
      (data) => {
        // this.notify.showSuccess('Institución registrada', 'La institución se ha registrado correctamente');
        this.router.navigate(['../../listar'], { relativeTo: this.route });
      },
      (error) => {
        console.log(error);
        //this.notify.showError('Error al registrar institución', 'Ha ocurrido un error al registrar la institución');
      }
    );
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];

    if (this.imageService.validateImage(file)) {
      // Leer la imagen seleccionada como una URL

      this.imagenTest = this.imageService.renameImage(file, 'TestImagenes');
      this.srcImage = '/public/TestImagenes/' + this.imagenTest.name;
      console.log('Nueva ruta: ', this.srcImage, ' Archivo', this.imagenTest);
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageUrl = e.target.result;
      };
      reader.readAsDataURL(file);
    } else {
      this.formTestImages.form.patchValue({ imagen: '' });
      this.imagenTest = undefined;
      this.imageUrl = '';
      return;
    }
  }

  cancel() {
    this.router.navigate(['../../listar'], { relativeTo: this.route });
  }
}

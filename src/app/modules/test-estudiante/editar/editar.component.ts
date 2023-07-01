import { ClsFormTestEstudiante } from '@/app/core/classForm/cls-form-test-estudiante';
import { TestEstudianteService } from '@/app/shared/services/api/test-estudiante.service';
import { ImageValidatorService } from '@/app/shared/services/utils/image-validator.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css'],
})
export class EditarComponent implements OnInit{
  public formTestImages = new ClsFormTestEstudiante();
  private testImages?: any;
  private srcImage = '';
  private imagenTest?: File;
  private id: string | null = '';

  constructor(
    private testService: TestEstudianteService,
    private imageService: ImageValidatorService,
    private router: Router,
    private route: ActivatedRoute
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

  setValues(data: any) {
    this.formTestImages.form.patchValue({ name: data.name });
    this.formTestImages.form.patchValue({ valor: data.value });
    this.formTestImages.form.patchValue({ section: data.section });
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
      this.imagenTest = this.imageService.renameImage(file, 'TestImagenes');
      this.srcImage = '/public/TestImagenes/' + file.name;
    } else {
      this.formTestImages.form.patchValue({ imagen: '' });
      this.imagenTest = undefined;
    }
  }

  cancel() {
    this.router.navigate(['../../listar'], { relativeTo: this.route });
  }
}

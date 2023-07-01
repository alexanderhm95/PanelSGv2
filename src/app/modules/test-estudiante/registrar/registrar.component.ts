import { ClsFormTestEstudiante } from '@/app/core/classForm/cls-form-test-estudiante';
import { TestEstudianteService } from '@/app/shared/services/api/test-estudiante.service';
import { ImageValidatorService } from '@/app/shared/services/utils/image-validator.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css'],
})
export class RegistrarComponent {
  public formTestImages = new ClsFormTestEstudiante();
  private testImages?: any;
  private srcImage = '';
  private imagenTest?: File;

  constructor(
    private testService: TestEstudianteService,
    private imageService: ImageValidatorService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnit() {
    this.formTestImages.form.reset();
  }

  create() {
    console.log(this.srcImage);
    this.testImages = {
      name: this.formTestImages.form.value.name,
      urlImage: this.srcImage,
      value: this.formTestImages.form.value.valor,
      section: this.formTestImages.form.value.section,
    };

    const formData = new FormData();
    formData.append('singleFile', this.imagenTest as File);
    formData.append('data', JSON.stringify(this.testImages));

    this.testService.createPregunta(formData).subscribe(
      (res) => {
        const { message } = res;
        console.log(message);
        this.router.navigate(['../listar'], { relativeTo: this.route });
      },
      (err) => {
        console.log(err);
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
    this.router.navigate(['../listar'], { relativeTo: this.route });
  }
}

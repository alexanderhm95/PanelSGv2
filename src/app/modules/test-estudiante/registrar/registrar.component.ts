import { ClsFormTestEstudiante } from '@/app/core/classForm/cls-form-test-estudiante';
import { TestEstudianteService } from '@/app/shared/services/api/test-estudiante.service';
import { ImageValidatorService } from '@/app/shared/services/utils/image-validator.service';
import { NotificationsService } from '@/app/shared/services/utils/notifications.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css'],
})
export class RegistrarComponent implements OnInit {
  public formTestImages = new ClsFormTestEstudiante();
  private testImages?: any;
  private srcImage = '';
  public imageUrl = '';
  private imagenTest?: File;

  constructor(
    private notification: NotificationsService,
    private testService: TestEstudianteService,
    private imageService: ImageValidatorService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
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
        this.notification.showSuccess(
          'Éxito',
          'pregunta agregada correctamente'
        );
        console.log(message);
        this.router.navigate(['../listar'], { relativeTo: this.route });
      },
      (error) => {
        if (error.status === 0) {
          this.notification.showError(
            'Error',
            'Error de conexión con el servidor, inténtelo mas tarde'
          );
        } else {
          this.notification.showError('Error', error.error.error);
        }
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
    this.router.navigate(['../listar'], { relativeTo: this.route });
  }
}

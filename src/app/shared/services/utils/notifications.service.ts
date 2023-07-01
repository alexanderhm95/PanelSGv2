import { Injectable } from '@angular/core';
import Swal, { SweetAlertOptions } from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class NotificationsService {
  showSuccess(title: string, text: string | undefined) {
    Swal.fire({
      title: title ? title : 'Exitoso',
      text: text ? text : 'operación exitosa',
      icon: 'success',
      confirmButtonText: 'Aceptar',
    });
  }

  showLoading(title: string, text: string, duration: number) {
    const options: SweetAlertOptions = {
      title: title,
      text: text,
      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: false,
      showConfirmButton: false,
      didOpen: () => {
        Swal.showLoading();
        setTimeout(() => {
          Swal.close();
        }, duration);
      },
    };

    Swal.fire(options);
  }

  showError(title: string, text: string) {
    Swal.fire({
      title: title,
      text: text,
      icon: 'error',
      confirmButtonText: 'Aceptar',
    });
  }

  showQuestion(title: string, text: string) {
    Swal.fire({
      title: title,
      text: text,
      icon: 'question',
      confirmButtonText: 'Aceptar',
    });
  }

  /**
   * showConfirm
   * @param icon
   * @param title
   * @param text
   * @param confirmButtonText
   * @param cancelButtonText
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  showConfirm(
    icon: any,
    title: string,
    text: string,
    confirmButtonText: string,
    cancelButtonText: string
  ) {
    return Swal.fire({
      icon: icon || 'warning',
      title: title,
      text: text,
      showCancelButton: true,
      confirmButtonText: confirmButtonText,
      cancelButtonText: cancelButtonText,
    });
  }
}

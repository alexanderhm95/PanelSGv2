import { Injectable } from '@angular/core';
import { NotificationsService } from './notifications.service';

@Injectable({
  providedIn: 'root'
})
export class ImageValidatorService {
constructor(
  private notification : NotificationsService
)
{}
  validateImage(file: File): boolean {
    const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg', 'image/svg', 'image/svg+xml', 'image/webp'];
    if (file && allowedTypes.includes(file.type)) {
      return true;
    } else {
      this.notification.showError("Formato incompatible", "Solo se aceptan formatos: .png, .jpg, .jpeg, .svg y .webp")
      return false;
    }
  }

  renameImage(file: File, destination: string): File {
    const name = file.name.split('.');
    const ext = name[name.length-1];
    console.log(ext, "  ",name   )
    const date = new Date();
    const formattedDate = `${date.getFullYear()}${(date.getMonth() + 1).toString().padStart(2, '0')}${date.getDate().toString().padStart(2, '0')}`;
    const formattedTime = `${date.getHours().toString().padStart(2, '0')}${date.getMinutes().toString().padStart(2, '0')}${date.getSeconds().toString().padStart(2, '0')}`;
    
    let newName = `${destination}_${name[0]}${formattedDate}${formattedTime}.${ext}`;
    
    
    const newFile = new File([file], newName, { type: file.type });
    return newFile;
  }
  




}

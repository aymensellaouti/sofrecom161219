import { Pipe, PipeTransform } from '@angular/core';

const defaultPath = 'cv.png';
@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {

  transform(path: string): string {
    if (path.trim().length) {
      return path.trim();
    }
    return defaultPath;
  }

}

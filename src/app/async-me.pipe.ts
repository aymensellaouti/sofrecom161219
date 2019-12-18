import { Pipe, PipeTransform } from '@angular/core';
import {Observable} from 'rxjs';

@Pipe({
  name: 'asyncMe'
})
export class AsyncMePipe implements PipeTransform {

  transform(observable: Observable<string>): any {
    observable.subscribe(
      (data) => {
        console.log(data);
        return data;
      }
    );
  }

}

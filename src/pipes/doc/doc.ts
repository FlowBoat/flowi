import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'doc',
})
export class DocPipe implements PipeTransform {
  transform(value: string, ...args) {
    return value;
  }
}

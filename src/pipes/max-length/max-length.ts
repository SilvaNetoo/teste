import { Pipe, PipeTransform } from '@angular/core';
import { Constante } from '../../constant/constante';

@Pipe({
  name: 'maxLength',
})
export class MaxLengthPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string) {
    return value.length > Constante.decimoDigito ? value.substring(Constante.valorOrigem, Constante.decimoDigito) + '...' : value;
  }
}

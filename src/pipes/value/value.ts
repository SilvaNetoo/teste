import { Pipe, PipeTransform } from '@angular/core';
import { Constante } from '../../constant/constante';

@Pipe({
  name: 'value',
})
export class ValuePipe implements PipeTransform {

  transform(value: number): string {
    value = value || 0;
    const brl = new Intl.NumberFormat('pt-BR', { minimumFractionDigits: Constante.fracaoMaxima }).format(Math.abs(value));

    return `R$ ${brl}`;
  }

}

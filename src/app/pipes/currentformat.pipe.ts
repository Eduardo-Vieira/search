import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currentformat'
})
export class CurrentformatPipe implements PipeTransform {

  transform(value: number): string {
    if (!value) { return '';}
    return this.getFormattedPrice(value);
  }
  
  getFormattedPrice(price: number) {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price);
  }

}

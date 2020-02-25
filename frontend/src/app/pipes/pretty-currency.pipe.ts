import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prettyCurrency'
})
export class PrettyCurrencyPipe implements PipeTransform {

  transform(value: number): string {
    return `${value.toFixed(2)}€`;
  }

}
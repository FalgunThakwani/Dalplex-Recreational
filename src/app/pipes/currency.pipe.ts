import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency'
})
export class CurrencyPipe implements PipeTransform {

  transform(value: string): string {
    const formatted = (+value).toFixed(2);
    return '$' + formatted;
  }

}

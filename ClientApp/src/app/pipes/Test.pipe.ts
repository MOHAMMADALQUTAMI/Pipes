import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Test'
})
export class TestPipe implements PipeTransform {

  transform(value: number, exponent = 1): string {
    return "(value, exponent)";
  }

}

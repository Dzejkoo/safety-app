import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'responsiveImage',
})
export class ResponsiveImage implements PipeTransform {
  transform(value: string) {
    console.log(value);
  }
}

import { Pipe, PipeTransform } from '@angular/core';
import { DeviceType } from '../_enums/device-type';

@Pipe({
  name: 'responsiveImage',
  standalone: true,
})
export class ResponsiveImagePipe implements PipeTransform {
  transform(value: string, deviceType: DeviceType) {
    let device = value + '-mobile';
    if (deviceType === DeviceType.DESKTOP_UP) device = value + '-desktop';
    if (deviceType === DeviceType.TABLET_UP) device = value + '-tablet';
    return device;
  }
}

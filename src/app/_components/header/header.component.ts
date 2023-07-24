import { Subscription } from 'rxjs';
import { Component, inject } from '@angular/core';
import { DeviceDetectorService } from 'src/app/_shared/_device-detector/device-detector.service';
import { ResponsiveImagePipe } from 'src/app/_shared/_pipes/responsive-image.pipe';
import { DeviceType } from 'src/app/_shared/_enums/device-type';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [ResponsiveImagePipe],
  standalone: true,
})
export class HeaderComponent {
  private readonly deviceType$ = inject(DeviceDetectorService).viewMode$;
  deviceTypeEnum: DeviceType;
  subscription$: Subscription;

  ngOnInit() {
    this.detectDeviceInit();
  }

  detectDeviceInit() {
    this.subscription$ = this.deviceType$.subscribe(
      (deviceTypes) => (this.deviceTypeEnum = deviceTypes)
    );
  }

  ngOnDestroy() {
    this.subscription$.unsubscribe();
  }
}

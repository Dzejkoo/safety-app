import { Injectable, inject } from '@angular/core';
import { DeviceDetectorService as DeviceService } from 'ngx-device-detector';
import { DeviceType } from '../_enums/device-type';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DeviceDetectorService {
  private readonly _deviceType$: BehaviorSubject<DeviceType>;
  private readonly _deviceService = inject(DeviceService);
  viewMode$: Observable<DeviceType>;

  constructor() {
    this._deviceType$ = new BehaviorSubject<DeviceType>(this._getInitDevice());
    this.viewMode$ = this._deviceType$.asObservable();
    console.log('test');
    console.log('test - 2');
  }

  private _getInitDevice(): DeviceType {
    let deviceType = DeviceType.MOBILE;
    if (this._deviceService.isDesktop()) deviceType = DeviceType.DESKTOP_UP;
    if (this._deviceService.isTablet()) deviceType = DeviceType.TABLET_UP;
    return deviceType;
  }
}

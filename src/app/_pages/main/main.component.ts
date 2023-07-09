import { HeaderComponent } from '../../_components/header/header.component';
import { Component, OnInit } from '@angular/core';
import { MainService } from './main.service';
import { Img, Package } from 'src/models/strapi-data.model';
import { PackagesComponent } from 'src/app/_components/packages/packages.component';
import { LogoSliderComponent } from 'src/app/_components/logo-slider/logo-slider.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  standalone: true,
  imports: [HeaderComponent, PackagesComponent, LogoSliderComponent],
})
export class MainComponent implements OnInit {
  packages: Package[] = [];
  logos: Img[] = [];
  constructor(private _mainService: MainService) {}

  ngOnInit() {
    this._getPackagesData();
    this._getLogoImgData();
  }

  private _getLogoImgData() {
    this._mainService.getLogos().subscribe((logoRes: any[]) => {
      this.logos = logoRes;
    });
  }

  private _getPackagesData() {
    this._mainService.getProduct().subscribe((packageRes: Package[]) => {
      this.packages = packageRes;
    });
  }
}

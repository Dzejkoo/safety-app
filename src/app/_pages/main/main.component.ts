import { HeaderComponent } from './../../_component/header/header.component';
import { Component, OnInit } from '@angular/core';
import { MainService } from './main.service';
import { Package } from 'src/models/strapi-data.model';
import { PackagesComponent } from 'src/app/_component/packages/packages.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  standalone: true,
  imports: [HeaderComponent, PackagesComponent],
})
export class MainComponent implements OnInit {
  package: Package[] = [];
  constructor(private _mainService: MainService) {}

  ngOnInit() {
    this._getPackagesData();
  }

  private _getPackagesData() {
    this._mainService.getProduct().subscribe((packageRes: Package[]) => {
      this.package = packageRes;
    });
  }
}

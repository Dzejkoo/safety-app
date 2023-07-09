import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Package } from 'src/models/strapi-data.model';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  standalone: true,
  imports: [NgFor],
  styleUrls: ['./packages.component.scss'],
})
export class PackagesComponent {
  @Input() packagesList: Package[];
}

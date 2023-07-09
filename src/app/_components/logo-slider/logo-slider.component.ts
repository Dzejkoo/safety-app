import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Img } from 'src/models/strapi-data.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-logo-slider',
  templateUrl: './logo-slider.component.html',
  standalone: true,
  imports: [NgFor],
  styleUrls: ['./logo-slider.component.scss'],
})
export class LogoSliderComponent {
  env = environment;
  @Input() logosList: Img[];
}

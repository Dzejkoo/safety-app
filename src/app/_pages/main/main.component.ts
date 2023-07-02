import { HeaderComponent } from './../../_component/header/header.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  standalone: true,
  imports: [HeaderComponent],
})
export class MainComponent {}

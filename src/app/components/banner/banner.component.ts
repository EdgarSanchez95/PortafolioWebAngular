import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {
  urlImg: string = '../../../assets/img/banner.jpg';
  photo: string = `url('${this.urlImg}')`;
}

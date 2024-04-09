import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  face: string = '../../../assets/img/fotoPerfil.jpeg'
  nombre: string = 'Edgar Sanchez Reyes';
}

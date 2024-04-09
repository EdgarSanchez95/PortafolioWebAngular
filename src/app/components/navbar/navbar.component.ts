import { CommonModule } from '@angular/common';
import { Component, TestabilityRegistry } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  loginShow: boolean = false;
}

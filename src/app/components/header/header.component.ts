import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { BannerComponent } from "../banner/banner.component";

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    imports: [NavbarComponent, BannerComponent]
})
export class HeaderComponent {

}

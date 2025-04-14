import { Component } from '@angular/core';
import { MenuLateralComponent } from "../menu-lateral/menu-lateral.component";

@Component({
  selector: 'app-header',
  imports: [MenuLateralComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true
})
export class HeaderComponent {
  menuOpened: boolean = false;

  toggleMenu(){

    console.log("this.menuOpened >>", this.menuOpened);
    
    this.menuOpened = !this.menuOpened;
  }
}

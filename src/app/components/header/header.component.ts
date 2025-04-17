import { Component } from '@angular/core';
import { MenuLateralComponent } from "../menu-lateral/menu-lateral.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [MenuLateralComponent, RouterModule],
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

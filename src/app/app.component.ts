import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { MenuLateralComponent } from './components/menu-lateral/menu-lateral.component';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { NewConfirmModalService } from 'ng-trimagix';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, MenuLateralComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [NewConfirmModalService]
})
export class AppComponent implements OnInit{
  title = 'ng-trimagix';

  ngOnInit(): void {
    AOS.init();
    AOS.refresh();
  }
}

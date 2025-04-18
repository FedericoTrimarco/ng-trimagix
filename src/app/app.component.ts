import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { MenuLateralComponent } from './components/menu-lateral/menu-lateral.component';
import 'aos/dist/aos.css';
import { NewConfirmModalService } from 'ng-trimagix';
import { AosService } from './services/aos.service';
import { CodeBlockComponent } from './components/code-block/code-block.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, MenuLateralComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [NewConfirmModalService]
})
export class AppComponent implements OnInit{
  title = 'ng-trimagix';

  constructor(private aosService: AosService){}

  ngOnInit(): void {
    this.aosService.initAos();
  }
}

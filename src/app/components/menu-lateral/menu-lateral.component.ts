import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu-lateral',
  imports: [CommonModule, RouterModule],
  templateUrl: './menu-lateral.component.html',
  styleUrl: './menu-lateral.component.scss',
  standalone: true
})
export class MenuLateralComponent {
  menu: any[] = [
    {
      title: "Home",
      link: "/home-page",
      icon: "fa-solid fa-house",
      child: null
    },
    {
      title: "Getting Started",
      link: null,
      icon: null,
      child: [
        {
          title: "Installation",
          link: "/getting-started/installation",
          icon: "fa-brands fa-instalod",
          child: null
        }
      ]
    }
  ]

}

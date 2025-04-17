import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu-lateral',
  imports: [CommonModule, RouterModule],
  templateUrl: './menu-lateral.component.html',
  styleUrl: './menu-lateral.component.scss',
  standalone: true
})
export class MenuLateralComponent {

  @Output() emitFunction = new EventEmitter<any>();
  
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
        },
        {
          title: "Quick Start",
          link: "/getting-started/quick-start",
          icon: "fa-regular fa-file-lines",
          child: null
        },
      ]
    },
    {
      title: "Functions Utils",
      link: null,
      icon: null,
      child: [
        {
          title: "FormGroup Validators",
          link: "/function-utils/form-group-validator",
          icon: "fa-solid fa-list-check",
          child: null
        },
        {
          title: "Modals",
          link: "/function-utils/modals",
          icon: "fa-solid fa-comment-nodes",
          child: null
        },
      ]
    }
  ]

  activeEmit(){
    this.emitFunction.emit();
  }
}

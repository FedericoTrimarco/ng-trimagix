import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HookFunctions } from 'ng-trimagix';

@Component({
  selector: 'app-quick-start-page',
  imports: [CommonModule],
  templateUrl: './quick-start-page.component.html',
  styleUrl: './quick-start-page.component.scss',
  providers: [HookFunctions]
})
export class QuickStartPageComponent {

  numberList: number[] = [];
  codeBlocks: any[] = [
    {
      titleBlock: "Install Angular CLI",
      description: "If you don't already have angular CLI installed on your machine, install it with the npm command:",
      codeString: "npm install -g @angular/cli"
    },
    {
      titleBlock: "Create a New Angular Project",
      description: "Now you can create Angular CLI project:",
      codeString: "ng new my-trimagix-app"
    },
    {
      titleBlock: "Install ng-trimagix",
      description: "After creating your project, install ng-trimagix:",
      codeString: "npm install ng-trimagix --save"
    },
    {
      titleBlock: "Create a Simple Component",
      description: "Let's create a simple component that uses some of the ng-trimagix components. We use one of the HookFunctions functions to generate a list of numbers:",
      codeString: null,
      codeStringList: [
        {
          language: "Typescript",
          codeStringDetail: `
          import { CommonModule } from '@angular/common';
          import { Component } from '@angular/core';
          import { HookFunctions } from 'ng-trimagix';
    
          @Component({
            selector: 'app-quick-start-page',
            imports: [CommonModule],
            templateUrl: './quick-start-page.component.html',
            styleUrl: './quick-start-page.component.scss',
            providers: [HookFunctions]
          })
          export class QuickStartPageComponent {
    
            numberList: number[] = [];
    
            constructor(
              private hf: HookFunctions
            ){}
    
            generateNumberList(){
              this.numberList = this.hf.generateNumberList(5, 15);
            }
          }
          `
        },
        {
          language: "HTML",
          codeStringDetail: this.escapeHtml(`
          <button (click)="generateNumberList()" type="button">
            Generate number list from 5 to 15
          </button>
          `)
        },
      ]
    },
  ]

  constructor(
    private hf: HookFunctions
  ){

    this.scrollWindowToTop();

  }

  scrollWindowToTop() {
    setTimeout(() => {
      window.scrollTo({
      top: 0,
        behavior: 'smooth'
      });
    }, 500);
  }

  copyContent(indexCodeBlock: number) {
    let elemento: any = document.getElementById('cod-block-' + indexCodeBlock);
    let testo = elemento.textContent;

    navigator.clipboard.writeText(testo.trim()).then(() => {
      let icon: any = document.getElementById('cod-block-btn-icon-' + indexCodeBlock);
      icon.classList.remove("fa-solid", "fa-clipboard");
      icon.classList.add("fa-solid", "fa-clipboard-check");

      setTimeout(() => {
        icon.classList.remove("fa-solid", "fa-clipboard-check");
        icon.classList.add("fa-solid", "fa-clipboard");
      }, 2000);

    }).catch(err => {
      console.error("Error: ", err);
    });
  }

  copyContentList(indexCodeBlock: number) {
    let elemento: any = document.getElementById('cod-block-list-'+indexCodeBlock);
    let testo = elemento.textContent;

    navigator.clipboard.writeText(testo.trim()).then(() => {
      let icon: any = document.getElementById('cod-block-btn-icon-list-'+indexCodeBlock);
      icon.classList.remove("fa-solid", "fa-clipboard");
      icon.classList.add("fa-solid", "fa-clipboard-check");

      setTimeout(() => {
        icon.classList.remove("fa-solid", "fa-clipboard-check");
        icon.classList.add("fa-solid", "fa-clipboard");
      }, 2000);

    }).catch(err => {
      console.error("Error: ", err);
    });
  }

  generateNumberList(){
    this.numberList = this.hf.generateNumberList(5, 15);
  }

  escapeHtml(html: string): string {
    return html
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }
}

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

  codeBlocks: any[] = [
    {
      titleBlock: "Create a New Angular Project",
      description: "If you don't already have an Angular project, you can create one using the Angular CLI:",
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
          <button (click)="generateNumberList()">
            Generate number list from 5 to 15
          </button>
          `)
        },
      ]
    },
  ]

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

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HookFunctions } from 'ng-trimagix';
import { codeBlock } from '../../interfaces/code-block-interface';
import { CodeBlockComponent } from "../../components/code-block/code-block.component";

@Component({
  selector: 'app-installation-page',
  imports: [CommonModule, RouterModule, CodeBlockComponent],
  templateUrl: './installation-page.component.html',
  styleUrl: './installation-page.component.scss',
  providers: [HookFunctions]
})
export class InstallationPageComponent {

  codeBlocks: codeBlock[] = [
    {
      titleBlock: "NPM Installation",
      description: "The recommended way to install ng-trimagix is through npm:",
      canCopy: true,
      codeString: "npm install ng-trimagix --save",
      codeStringList: null
    },
    {
      titleBlock: "Yarn Installation",
      description: "If you prefer using Yarn:",
      canCopy: true,
      codeString: "yarn add ng-trimagix",
      codeStringList: null
    },
    {
      titleBlock: "Setting Up",
      description: "After installation, you simply need to import one of the ng-trimagix utilities into your component by calling it in the constructor and in the providers:",
      canCopy: true,
      codeString: `
        import { CommonModule } from '@angular/common';
        import { Component } from '@angular/core';
        import { HookFunctions } from 'ng-trimagix';

        @Component({
          selector: 'app-installation-page',
          imports: [CommonModule],
          templateUrl: './installation-page.component.html',
          styleUrl: './installation-page.component.scss',
          providers: [HookFunctions]
        })
        export class InstallationPageComponent {

          constructor(
            private hf: HookFunctions
          ){}
          
        }
      `,
      codeStringList: null
    }
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
  
}

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
  ){

  }

  codeBlocks: any[] = [
    {
      titleBlock: "NPM Installation",
      description: "The recommended way to install ng-trimagix is through npm:",
      codeString: "npm install ng-trimagix --save"
    },
    {
      titleBlock: "Yarn Installation",
      description: "If you prefer using Yarn:",
      codeString: "yarn add ng-trimagix"
    },
    {
      titleBlock: "Setting Up",
      description: "After installation, you simply need to import one of the ng-trimagix utilities into your component by calling it in the constructor and in the providers:",
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
      `
    }
  ]
}

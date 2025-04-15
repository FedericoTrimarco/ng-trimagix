import { Component } from '@angular/core';
import { HookFunctions } from 'ng-trimagix';

@Component({
  selector: 'app-form-validator-page',
  imports: [],
  templateUrl: './form-validator-page.component.html',
  styleUrl: './form-validator-page.component.scss',
  standalone: true,
  providers: [HookFunctions]
})
export class FormValidatorPageComponent {

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
  
}

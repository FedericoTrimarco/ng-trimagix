import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HookFunctions } from 'ng-trimagix';

@Component({
  selector: 'app-home-page',
  imports: [RouterModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  standalone: true,
  providers:[HookFunctions]
})
export class HomePageComponent {

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

  goToGithubPage(){
    let link = "https://github.com/FedericoTrimarco/ng-trimagix";

    window.open(link, "_blank")
  }
  
}

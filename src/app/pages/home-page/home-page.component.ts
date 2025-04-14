import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-page',
  imports: [RouterModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  standalone: true
})
export class HomePageComponent {

  goToGithubPage(){
    let link = "https://github.com/FedericoTrimarco/ng-trimagix";

    window.open(link, "_blank")
  }
}

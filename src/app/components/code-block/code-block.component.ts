import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { codeBlock } from '../../interfaces/code-block-interface';

@Component({
  selector: 'app-code-block',
  imports: [CommonModule],
  templateUrl: './code-block.component.html',
  styleUrl: './code-block.component.scss'
})
export class CodeBlockComponent {

  @Input() codeBlocks: codeBlock[] = [] ;
  
  constructor(){

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

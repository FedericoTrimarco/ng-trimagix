import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { NewConfirmModalService, NewModalService } from 'ng-trimagix';

@Component({
  selector: 'app-simple-modal',
  imports: [CommonModule, MatTabsModule],
  templateUrl: './simple-modal.component.html',
  styleUrl: './simple-modal.component.scss',
  providers: [NewConfirmModalService, NewModalService]
})
export class SimpleModalComponent {

  codeBlocksTs: any[] = [
    {
      titleBlock: "Simple Modal",
      description: "",
      codeString: `
      import { CommonModule } from '@angular/common';
      import { Component } from '@angular/core';
      import { MatTabsModule } from '@angular/material/tabs';
      import { NewModalService } from 'ng-trimagix';
      
      @Component({
        selector: 'app-simple-modal',
        imports: [CommonModule, MatTabsModule],
        templateUrl: './simple-modal.component.html',
        styleUrl: './simple-modal.component.scss',
        providers: [NewModalService]
      })
      export class SimpleModalComponent {
      
        constructor(
          private modalSevice: NewModalService,
        ){}
      
        <span class="text-warning">
        openModalTest() {
          this.modalSevice.open('MODAL TEST', "This is a simple message", 'bg-success text-white');
        }
        </span>
      
      }`
    },
    {
      titleBlock: "Modal Confirm",
      description: "",
      codeString: `
      import { CommonModule } from '@angular/common';
      import { Component } from '@angular/core';
      import { MatTabsModule } from '@angular/material/tabs';
      <span class="text-warning">import { NewConfirmModalService } from 'ng-trimagix'</span>;

      @Component({
        selector: 'app-simple-modal',
        imports: [CommonModule, MatTabsModule],
        templateUrl: './simple-modal.component.html',
        styleUrl: './simple-modal.component.scss',
        <span class="text-warning">providers: [NewConfirmModalService]</span>
      })
      export class SimpleModalComponent {

        constructor(
          <span class="text-warning">private modalConfrimSevice: NewConfirmModalService</span>,
        ){}

        <span class="text-warning">
        confrimModalTest() {
          this.modalConfrimSevice.confirm("CONFIRM OPERATION", "Are you sure you want to go ahead with the process ?").then(
            (res: any) => {

              if (res == true) {

                console.log("operation ok");
                

              }
            }
          );
        }
        </span>
      }
      `
    },
  ]

  codeBlocksHtml: any[] = [
    {
      titleBlock: "Simple Modal",
      description: "",
      codeString: this.escapeHtml(`
      <button (click)="openModalTest()">
        Simple Modal
      </button>`)
    },
    {
      titleBlock: "Modal Confirm",
      description: "",
      codeString: this.escapeHtml(`
      <button (click)="confrimModalTest()">
        Confirm Modal
      </button>`)
    },
    
  ]

  constructor(
    private modalConfrimSevice: NewConfirmModalService,
    private modalSevice: NewModalService,
  ){}

  confrimModalTest() {
    this.modalConfrimSevice.confirm("CONFIRM OPERATION", "Are you sure you want to go ahead with the process ?").then(
      (res: any) => {

        if (res == true) {

          this.modalSevice.open('OPERATION COMPLETED', "You have completed the process!", 'bg-success text-white');

        }
      }
    );
  }

  openModalTest() {
    this.modalSevice.open('MODAL TEST', "This is a simple message", 'bg-success text-white');
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

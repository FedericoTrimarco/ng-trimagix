import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NewConfirmModalService, NewModalService } from 'ng-trimagix';

@Component({
  selector: 'app-modal-confirm-page',
  imports: [CommonModule],
  templateUrl: './modal-confirm-page.component.html',
  styleUrl: './modal-confirm-page.component.scss',
  providers: [NewConfirmModalService, NewModalService]
})
export class ModalConfirmPageComponent {

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

    ).catch();
  }



}

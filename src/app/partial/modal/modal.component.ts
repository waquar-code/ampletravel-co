import { Component } from '@angular/core';
import { ModalServiceService } from 'src/app/services/modal-service.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  showFlightModal = false;
  formDataEl = '';

  constructor(private modalService: ModalServiceService) {
    this.modalService.getFlightModal().subscribe((r) => {
      this.handleFlightModal(r);
    });
  }

  handleFlightModal(data: any) {
    console.log(data);
    this.showFlightModal = data.show;
    if (this.showFlightModal == false) return;

    const d = data.data;

    this.formDataEl = `
      Flight From: ${d.flight_from} <br>
      Flight To: ${d.flight_from} <br>
    `;
  }
}

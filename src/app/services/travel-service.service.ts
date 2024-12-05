import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ModalServiceService } from './modal-service.service';

@Injectable({
  providedIn: 'root',
})
export class TravelServiceService {
  private flightFormValueSubject = new Subject();
  private flightListDataSubject = new Subject();

  constructor(private modalService: ModalServiceService) {}

  getFlightFormValues() {
    return this.flightFormValueSubject;
  }

  nextFlightFormValues(obj: any) {
    return this.flightFormValueSubject.next(obj);
  }

  flightSearch(value: any) {
    this.flightFormValueSubject.next(value);

    this.modalService.showFlightModal();

    setTimeout(() => {
      // [...Array(parseInt(Math.random() * 10)).keys()],
      const d = { list: [1, 2, 3, 4, 5, 6] };

      this.flightListDataSubject.next(d);

      this.modalService.hideFlightModal();
    }, 4000);
  }
}

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalServiceService {
  private flightModalSubject = new Subject();

  constructor() {}

  getFlightModal() {
    return this.flightModalSubject;
  }

  showFlightModal() {
    this.flightModalSubject.next({
      show: true,
      data: {
        flight_from: 'xyz',
      },
    });
  }

  hideFlightModal() {
    this.flightModalSubject.next({ show: false });
  }
}

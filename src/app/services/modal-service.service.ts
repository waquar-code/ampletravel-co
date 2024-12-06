import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalServiceService {
  private flightModalSubject = new Subject();

  constructor() {}

  getFlightModalSubject() {
    return this.flightModalSubject;
  }

  showFlightModal(value: any) {
    this.flightModalSubject.next({
      show: true,
      data: value,
    });
  }

  hideFlightModal() {
    this.flightModalSubject.next({ show: false });
  }
}

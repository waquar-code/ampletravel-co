import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ModalServiceService } from './modal-service.service';
import { AirportListService } from './airport-list.service';

@Injectable({
  providedIn: 'root',
})
export class TravelServiceService {
  private flightFormValueSubject = new Subject();
  private flightFormValue = null;

  private flightSearchResultSubject = new Subject();

  constructor(
    private modalService: ModalServiceService,
    private airportListService: AirportListService
  ) {}

  getAirport(str: string) {
    return this.airportListService.getAirport(str);
  }

  getFlightSearchResultSubject() {
    return this.flightSearchResultSubject;
  }

  searchFlights(value: any) {
    this.flightFormValueSubject.next(value);
    this.flightSearchResultSubject.next([]);

    this.modalService.showFlightModal(value);

    setTimeout(() => {
      const flightData = [
        {
          origin: 'DAC',
          destination: 'CGP',

          departureDate: '2020-04-26T07:00',
          arrivalDate: '2020-04-26T07:55',
        },
        {
          origin: 'CGP',
          destination: 'DAC',

          departureDate: '2020-04-29T08:25',
          arrivalDate: '2020-04-29T09:20',
        },
      ];

      for (let i = 0; i < Math.random() * 10; i++) {
        flightData.push(flightData[0]);
      }

      this.flightSearchResultSubject.next(flightData);

      this.modalService.hideFlightModal();
    }, 4000);
  }
}

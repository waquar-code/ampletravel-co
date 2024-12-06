import { Component } from '@angular/core';
import { TravelServiceService } from 'src/app/services/travel-service.service';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css'],
})
export class FlightListComponent {
  flightData: any = [];

  constructor(private travelService: TravelServiceService) {}

  ngOnInit() {
    this.travelService.getFlightSearchResultSubject().subscribe((r) => {
      // console.log(r);
      this.flightData = r;
    });
  }

  // ngOnDestroy() {
  //   this.travelService.getFlightSearchResultSubject().unsubscribe();
  // }
}

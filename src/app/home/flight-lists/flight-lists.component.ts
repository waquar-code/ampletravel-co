import { Component } from '@angular/core';
import { TravelSearchService } from 'src/app/services/travel-search.service';

@Component({
  selector: 'app-flight-lists',
  templateUrl: './flight-lists.component.html',
  styleUrls: ['./flight-lists.component.css'],
})
export class FlightListsComponent {
  constructor(private httpService: TravelSearchService) {}

  ngOnInit() {
    this.renderFlightList();
  }

  renderFlightList() {
    // const data = this.httpService.getFlightList();
    // console.log(data);
  }
}

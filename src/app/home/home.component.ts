import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  switchTab = true;
  isFlightSearchShown = true;

  ngOnInit() {
    this.handleFlightHotelSwitchTab();
  }

  showSearchTab(mode: string) {
    this.isFlightSearchShown = mode == 'flight';
  }

  handleFlightHotelSwitchTab() {
    const pathname = location.pathname;

    if (pathname == '/flight-search' || pathname == '/hotel-search') {
      this.switchTab = false;

      this.isFlightSearchShown = pathname == '/flight-search';
    }
  }
}

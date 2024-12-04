import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  isFlightSearchShown = true;

  showSearchTab(mode: string) {
    console.log(mode);
    this.isFlightSearchShown = mode == 'flight';
  }
}

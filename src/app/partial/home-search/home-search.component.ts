import { Component } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TravelSearchService } from 'src/app/services/travel-search.service';

@Component({
  selector: 'app-home-search',
  templateUrl: './home-search.component.html',
  styleUrls: ['./home-search.component.css'],
})
export class HomeSearchComponent {
  flightForm = new FormGroup({
    flight_from: new FormControl(''),
    flight_to: new FormControl(''),
    flight_dept: new FormControl(''),
    flight_return: new FormControl(''),
    flight_adult: new FormControl(0),
    flight_child: new FormControl(0),
    flight_infant: new FormControl(0),
    flight_coach: new FormControl('economy'),
  });

  constructor(
    // private route: ActivatedRoute,
    private router: Router,
    private httpService: TravelSearchService
  ) {}

  ngOnInit() {}

  onFlightFormSubmit() {
    // console.log(this.flightForm.value);
    this.httpService.getFlightResult(this.flightForm.value).subscribe(
      (response) => {
        // console.log(response);
        this.router.navigate(['flight-list']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}

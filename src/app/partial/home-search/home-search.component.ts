import { Component } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TravelSearchService } from 'src/app/services/travel-search.service';

@Component({
  selector: 'app-home-search',
  templateUrl: './home-search.component.html',
  styleUrls: ['./home-search.component.css'],
})
export class HomeSearchComponent {
  isHomePage = true;

  flightForm = new FormGroup({
    flight_from: new FormControl('McCarran Intl, US (LAS)', [
      Validators.required,
    ]),
    flight_to: new FormControl('Los Angeles Intl Arpt, US (LAX)', [
      Validators.required,
    ]),
    flight_dept: new FormControl('2025-03-01', [Validators.required]),
    flight_return: new FormControl('2025-03-01', [Validators.required]),
    flight_adult: new FormControl(1),
    flight_child: new FormControl(0),
    flight_infant: new FormControl(0),
    flight_coach: new FormControl('economy'),
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private httpService: TravelSearchService
  ) {}

  ngOnInit() {
    this.showTabButton(); // show top tab
    this.setDefaultDateForForm(); // Departing & return date

    const queryFormData: any = this.route.snapshot.queryParamMap;
    const params = queryFormData.params;

    if ('flight_from' in params) {
      this.flightForm.patchValue({
        flight_from: params.flight_from,
        flight_to: params.flight_to,
        flight_dept: params.flight_dept,
        flight_return: params.flight_return,
        flight_adult: params.flight_adult,
        flight_child: params.flight_child,
        flight_infant: params.flight_infant,
        flight_coach: params.flight_coach,
      });
    }
  }

  // guests counter
  guestCounter(event: any, field: string, mode: boolean) {
    event.stopPropagation();

    let value = this.flightForm.get(field)?.value;
    mode ? value++ : value--;
    if (value <= 0) value = 0;

    this.flightForm.patchValue({ [field]: value });
  }

  onFlightFormSubmit() {
    this.router.navigate(['flight-list'], {
      queryParams: this.flightForm.value,
    });

    // this.httpService.getFlightResult(this.flightForm.value).subscribe(
    //   (response) => {
    //     // console.log(response);
    //     this.router.navigate(['flight-list']);
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
  }

  stopPropagation(event: any) {
    event.stopPropagation();
  }

  showTabButton() {
    if (
      location.href.includes('flight-list') ||
      location.href.includes('hotel-list')
    ) {
      this.isHomePage = false;
    }
  }

  setDefaultDateForForm() {
    var date = new Date();
    date.setDate(date.getDate() + 1);

    const start = new Date().toISOString().split('T')[0];
    const end = date.toISOString().split('T')[0];

    this.flightForm.patchValue({
      flight_dept: start,
      flight_return: end,
    });
  }
}

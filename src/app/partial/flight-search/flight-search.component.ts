import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TravelServiceService } from 'src/app/services/travel-service.service';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./flight-search.component.css'],
})
export class FlightSearchComponent {
  flightForm = new FormGroup({
    flight_from: new FormControl('McCarran Intl, US (LAS)', [
      Validators.required,
    ]),
  });

  constructor(
    private travelService: TravelServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.setFlightFormValues();
  }

  setFlightFormValues() {
    const queryFormData: any = this.route.snapshot.queryParamMap;
    const params = queryFormData.params;

    if ('flight_from' in params) {
      this.flightForm.patchValue({
        flight_from: params.flight_from,
      });
      this.travelService.searchFlights(this.flightForm.value);
      // console.log(`set flight values from query`);
    }
  }

  onFlightFormSubmit() {
    // console.log(this.flightForm.value);
    this.travelService.searchFlights(this.flightForm.value);

    this.router.navigate(['flight-list'], {
      queryParams: this.flightForm.value,
    });
  }
}

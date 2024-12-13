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
  filteredFlightFrom: any = [];
  filteredFlightTo: any = [];

  flightForm = new FormGroup({
    flight_type: new FormControl('round_trip'),
    direct_flight: new FormControl(false),

    flight_from: new FormControl('McCarran Intl, US (LAS)', [
      Validators.required,
    ]),
    flight_to: new FormControl('McCarran Intl, US (LAS)', [
      Validators.required,
    ]),
    flight_dept: new FormControl('', [Validators.required]),
    flight_return: new FormControl('', [Validators.required]),
    flight_adult: new FormControl(1, [Validators.required]),
    flight_child: new FormControl(0, [Validators.required]),
    flight_infant: new FormControl(0, [Validators.required]),
    flight_coach: new FormControl('economy', [Validators.required]),
  });

  constructor(
    private travelService: TravelServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.setFlightFormValues();

    this.flightForm.controls['flight_from'].valueChanges.subscribe(
      (value: any) => {
        if (value && value.airport_code) {
        } else this.filteredFlightFrom = this.travelService.getAirport(value);
      }
    );

    this.flightForm.controls['flight_to'].valueChanges.subscribe(
      (value: any) => {
        if (value && value.airport_code) {
        } else this.filteredFlightTo = this.travelService.getAirport(value);
      }
    );
  }

  displayFn(value: any) {
    return value.display_name;
  }

  guestCounter(event: any, field: string, mode: boolean) {
    event.stopPropagation();

    let value = this.flightForm.get(field)?.value;
    mode ? value++ : value--;
    if (value <= 0) value = 0;

    this.flightForm.patchValue({ [field]: value });
  }

  openDropdown(event: any) {
    console.log(event);
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
    console.log(this.flightForm.value);
    return;
    this.travelService.searchFlights(this.flightForm.value);

    this.router.navigate(['flight-list'], {
      queryParams: this.flightForm.value,
    });
  }
}

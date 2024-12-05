import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TravelServiceService } from 'src/app/services/travel-service.service';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
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
    console.log('getFlightFormValues');
    // this.travelService.nextFlightFormValues().subscribe((result) => {

    this.travelService.getFlightFormValues().subscribe((result) => {
      this.travelService.getFlightFormValues().unsubscribe();

      console.log(result);
      this.setFlightFormValues(result);
    });
    // flightFormValues
  }

  setFlightFormValues(result: any) {
    this.flightForm.patchValue({
      flight_from: result.flight_from,
    });

    this.travelService.flightSearch(this.flightForm.value);
  }

  onFlightFormSubmit() {
    // console.log(this.flightForm.value);
    this.travelService.nextFlightFormValues(this.flightForm.value);

    // this.router.navigate(['flight-list'], {
    //   queryParams: this.flightForm.value,
    // });
  }
}

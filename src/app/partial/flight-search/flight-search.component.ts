import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
})
export class FlightSearchComponent {
  // const filterChanges$ = new Subject()
  
  flightForm = new FormGroup({
    flight_from: new FormControl('McCarran Intl, US (LAS)', [
      Validators.required,
    ]),
  });

  constructor(
    // private travelHttpService: TravelSearchService

    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.setFlightFormValues();
  }

  setFlightFormValues() {
    const queryFormData: any = this.route.snapshot.queryParamMap;
    const params = queryFormData.params;

    const formControlLength = Object.keys(this.flightForm.value);
    const queryDataLength = Object.keys(params);

    console.log('formControlLength');
    console.log(formControlLength);
    console.log('queryDataLength');
    console.log(queryDataLength);

    if (queryDataLength >= formControlLength) {
      this.flightForm.patchValue({
        flight_from: params.flight_from,
      });

      // this.travelHttpService.showFlightModal(this.flightForm.value);
      // this.showFlightSearchModal = true;
      console.log('values was set');
    }
  }

  onFlightFormSubmit() {
    console.log(this.flightForm.value);

    this.router.navigate(['flight-list'], {
      queryParams: this.flightForm.value,
    });
  }
}

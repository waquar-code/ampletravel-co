import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightListsComponent } from './flight-lists.component';

describe('FlightListsComponent', () => {
  let component: FlightListsComponent;
  let fixture: ComponentFixture<FlightListsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlightListsComponent]
    });
    fixture = TestBed.createComponent(FlightListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

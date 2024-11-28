import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Keys {
  token = '';

  b = {
    data: {
      slices: [
        {
          origin: 'LHR',
          destination: 'JFK',
          departure_time: {
            to: '17:00',
            from: '09:45',
          },
          departure_date: '2024-12-10',
          arrival_time: {
            to: '17:00',
            from: '09:45',
          },
        },
      ],
      passengers: [
        {
          age: 14,
        },
        {
          fare_type: 'student',
        },
        {
          age: 5,
          fare_type: 'contract_bulk_child',
        },
      ],
      max_connections: 0,
      cabin_class: 'economy',
    },
  };

  getDuffleKey() {
    return this.token;
  }
}

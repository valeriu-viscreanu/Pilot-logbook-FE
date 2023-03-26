import { Injectable } from '@angular/core';
import { AircraftService } from '../aircraft-list/aircraft.service';
import { Flight } from './flight.model';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {


  constructor(private aricraftService: AircraftService) {}

  Flights: Flight[] =[
    new Flight ("D-EBB",  "2016-01-17 18:12", "2016-01-17 18:12", "Jane Doe"),
    new Flight ("D-EBB", "2016-01-18 10:10", "2016-01-18 12:10", "John Doe"),
    new Flight ("EI-SDHB", "2016-01-19 10:48", "2016-01-19 12:15", "John Doe"),
    new Flight ("EI-SDHB", "2016-01-20 14:10", "2016-01-20 13:12", "John Doe"),
    new Flight ("D-EBB", "2016-03-18 15:29", "2016-03-18 16:25", "John Doe"),
    new Flight ("D-EBB", "2016-03-27 09:32", "2016-03-27 10:49", "John Doe")
  ]

  getAllFlights(): Flight[]
  {
    return this.Flights;
  }
}

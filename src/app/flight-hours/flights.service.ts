import { Injectable } from '@angular/core';
import { Flight } from './flight.model';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {

  Flights: Flight[] =[
    new Flight ("D-EBB",  new Date("2016-01-17"), new Date("2016-01-17"), "Jane Doe"),
    new Flight ("D-EBB", new Date("2016-01-18"), new Date("2016-01-18"), "John Doe"),
    new Flight ("EI-SDHB", new Date("2016-01-19"), new Date("2016-01-19"), "John Doe"),
    new Flight ("EI-SDHB", new Date("2016-01-20"), new Date("2016-01-20"), "John Doe"),
    new Flight ("D-EBB", new Date("2016-03-18"), new Date("2016-03-18"), "John Doe"),
    new Flight ("D-EBB", new Date("2016-03-27"), new Date("2016-03-27"), "John Doe")
  ]

  getAllFlights(): Flight[]
  {
    return this.Flights;
  }
  constructor() { }
}

import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FlightsService } from '../flights.service';


@Component({
  selector: 'app-flight-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private flightService: FlightsService) { }

 

  displayedColumns: string[] = ['Aircraft', 'TakeoffTime', 'LandingTime', 'Pilots'];
  dataSource = new MatTableDataSource(this.flightService.getAllFlights().map( f => ({Aircraft: f.aircraft, TakeoffTime: f.takeoffTime, LandingTime: f.landingTime, Pilots: f.pilots})));
  
  ngOnInit() {
  }
}

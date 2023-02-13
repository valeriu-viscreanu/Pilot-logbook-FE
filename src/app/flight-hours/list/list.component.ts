import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Aircraft } from '../aircraft.model';
import { Flight } from '../flight.model';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }

  private Ac: Aircraft = new Aircraft("Katana","DV20", "D-EBB");
   Flights: Flight[] =[
     new Flight ( this.Ac,  new Date("2016-01-17"), new Date("2016-01-17"), "Jane Doe"),
     new Flight ( this.Ac, new Date("2016-01-18"), new Date("2016-01-18"), "John Doe"),
     new Flight ( this.Ac, new Date("2016-01-19"), new Date("2016-01-19"), "John Doe"),
     new Flight ( this.Ac, new Date("2016-01-20"), new Date("2016-01-20"), "John Doe"),
     new Flight ( this.Ac, new Date("2016-03-18"), new Date("2016-03-18"), "John Doe"),
     new Flight ( this.Ac, new Date("2016-03-27"), new Date("2016-03-27"), "John Doe"),

   ]

  displayedColumns: string[] = ['aircraft', 'takeoffTime', 'landingTime', 'pilots'];
  dataSource = new MatTableDataSource(this.Flights.map( f => ({aircraft: f.aircraft.registration, takeoffTime: f.takeoffTime , landingTime: f.landingTime, pilots: f.pilots})));
    
  ngOnInit() {
  }

}

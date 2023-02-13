import { Component, OnInit } from '@angular/core';
import { Aircraft } from '../aircraft.model';
import { Flight } from '../flight.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }

  private ac: Aircraft = new Aircraft("Katana","DV20", "D-EBB");
   Flights: Flight[] =[
     new Flight ( this.ac,  new Date("2016-01-17"), new Date("2016-01-17"), "Jane Doe"),
     new Flight ( this.ac, new Date("2016-01-18"), new Date("2016-01-18"), "John Doe"),
     new Flight ( this.ac, new Date("2016-01-19"), new Date("2016-01-19"), "John Doe"),
     new Flight ( this.ac, new Date("2016-01-20"), new Date("2016-01-20"), "John Doe"),
     new Flight ( this.ac, new Date("2016-03-18"), new Date("2016-03-18"), "John Doe"),
     new Flight ( this.ac, new Date("2016-03-27"), new Date("2016-03-27"), "John Doe"),

   ]
    

  ngOnInit() {
  }

}

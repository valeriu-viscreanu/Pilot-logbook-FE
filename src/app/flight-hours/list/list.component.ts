import { Component, OnInit } from '@angular/core';
import { Flight } from '../flight.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }

   Flights: Flight[] =[
     new Flight ( "DV20",  new Date("2016-01-17"), new Date("2016-01-17"), "Jane Doe"),
     new Flight ( "DA40", new Date("2016-01-18"), new Date("2016-01-19"), "John Doe")
   ]
    

  ngOnInit() {
  }

}

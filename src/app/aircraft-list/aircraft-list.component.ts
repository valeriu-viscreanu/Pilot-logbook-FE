import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AircraftService } from './aircraft.service';

@Component({
  selector: 'app-aircraft-list',
  templateUrl: './aircraft-list.component.html',
  styleUrls: ['./aircraft-list.component.css']
})
export class AircraftListComponent {

  constructor(private readonly aircraftService: AircraftService){
  }
  displayedColumns: string[] = ['Aircraft', 'Registration', 'Type'];
  dataSource = new MatTableDataSource(this.aircraftService.getAllAircraft().map( f => ({Aircraft: f.name, Registration: f.registration, Type: f.type})));
    
}

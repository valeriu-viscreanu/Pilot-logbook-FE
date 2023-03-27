import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { FlightsService } from '../flights.service';

@Component({
  selector: 'app-flight-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private flightService: FlightsService, private formBuilder: FormBuilder) { }
  editForm: FormGroup;
  
  displayedColumns: string[] = ['Aircraft', 'TakeoffTime', 'LandingTime', 'Pilots'];
  dataSource = new MatTableDataSource(this.flightService.getAllFlights().map( f => ({Aircraft: f.aircraft, TakeoffTime: f.takeoffTime, LandingTime: f.landingTime, Pilots: f.pilots})));
  
  ngOnInit() {
        // Define your form controls and validators here
        this.editForm = this.formBuilder.group({
          // Add your form controls and validators here
        });
  }

  editFlight(flt: any) {
    flt.isEditable = true;
  }
  
  saveFlight(flt: any) {
    flt.isEditable = false;
    // call the flight service to update the flight details
  }
  
  cancelEdit(flt: any) {
    flt.isEditable = false;
    // reset the flight details to their original values
    this.dataSource.data = this.dataSource.data.map(f => f === flt ? { ...flt } : f);
  }

  onCancelClick() {
    // Perform the cancel action here
  }

  onSaveClick() {
    // Perform the save action here
  }
  
  addNewFlight()
  {
    
  }
}



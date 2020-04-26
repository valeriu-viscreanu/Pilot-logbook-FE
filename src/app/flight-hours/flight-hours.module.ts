import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { FlightEditComponent } from './list/flight-edit/flight-edit.component';
import { OverviewComponent } from './list/overview/overview.component';
import { FlightComponent } from './list/flight/flight.component';



@NgModule({
  declarations: [ListComponent, FlightEditComponent, OverviewComponent, FlightComponent],
  imports: [
    CommonModule
  ],
  exports: [ListComponent, OverviewComponent]
})
export class FlightHoursModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { FlightEditComponent } from './list/flight-edit/flight-edit.component';
import { OverviewComponent } from './list/overview/overview.component';
import { FlightComponent } from './list/flight/flight.component';

import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatSortModule} from '@angular/material/sort';

@NgModule({
  declarations: [ListComponent, FlightEditComponent, OverviewComponent, FlightComponent],
  imports: [
    CommonModule,
    MatTableModule,    
    MatTableModule,
    CommonModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatSortModule
  ],
  exports: [ListComponent, OverviewComponent]
})
export class FlightHoursModule { }

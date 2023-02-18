import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { FlightEditComponent } from './list/flight-edit/flight-edit.component';
import { OverviewComponent } from './list/overview/overview.component';
import { FlightComponent } from './list/flight/flight.component';
import { AircraftListComponent } from '../aircraft-list/aircraft-list.component';

import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatSortModule} from '@angular/material/sort';
import { AppModule } from "../app.module";

@NgModule({
    declarations: [ListComponent,
        FlightEditComponent,
        OverviewComponent,
        FlightComponent,
        AircraftListComponent],
    exports: [ListComponent, OverviewComponent],
    imports: [
        CommonModule,
        MatTableModule,
        CommonModule,
        MatInputModule,
        MatSelectModule,
        MatCardModule,
        MatSortModule
    ]
})
export class FlightHoursModule { }

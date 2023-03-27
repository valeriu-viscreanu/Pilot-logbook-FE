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
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';


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
        ReactiveFormsModule,
        MatInputModule,
        MatSelectModule,
        MatCardModule,
        MatSortModule,
        MatDialogModule
    ]
})
export class FlightHoursModule { }

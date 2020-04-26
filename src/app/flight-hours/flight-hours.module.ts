import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { ListEditComponent } from './list/list-edit/list-edit.component';
import { OverviewComponent } from './list/overview/overview.component';



@NgModule({
  declarations: [ListComponent, ListEditComponent, OverviewComponent],
  imports: [
    CommonModule
  ]
})
export class FlightHoursModule { }

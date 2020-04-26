import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { ListEditComponent } from './list/list-edit/list-edit.component';
import { OverviewComponent } from './list/overview/overview.component';
import { ListItemComponent } from './list/list-item/list-item.component';



@NgModule({
  declarations: [ListComponent, ListEditComponent, OverviewComponent, ListItemComponent],
  imports: [
    CommonModule
  ],
  exports: [ListComponent, OverviewComponent]
})
export class FlightHoursModule { }

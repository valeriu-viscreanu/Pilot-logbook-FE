import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar'


import { AppComponent } from './app.component';
import { FlightHoursModule } from './flight-hours/flight-hours.module';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogEntryComponent } from './log-entry/log-entry.component';
import { LongEntryListComponent } from './log-entry/long-entry-list/long-entry-list.component';
import { LongEntryElementComponent } from './log-entry/long-entry-element/long-entry-element.component';
import { LongEntryEditComponent } from './log-entry/long-entry-edit/long-entry-edit.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    LogEntryComponent,
    LongEntryListComponent,
    LongEntryElementComponent,
    LongEntryEditComponent,
    AuthenticationComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FlightHoursModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

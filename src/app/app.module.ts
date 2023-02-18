import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DashboardElementComponent } from './dashboard/dashboard-element/dashboard-element.component';

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
import { LoginComponent } from './login/login.component';
import {AppRoutingModule} from './app-routing-module'
import { MatGridListModule } from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';


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
    NavBarComponent,
    DashboardElementComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FlightHoursModule,
    MatToolbarModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatFormFieldModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

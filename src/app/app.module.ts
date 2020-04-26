import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FlightHoursModule } from './flight-hours/flight-hours.module';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FlightHoursModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";


import { DashboardComponent } from './dashboard/dashboard.component';
import { FlightComponent } from './flight-hours/list/flight/flight.component';
import { AircraftListComponent } from './aircraft-list/aircraft-list.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
    { 
        path: '', redirectTo: '/flightslist', pathMatch: 'full'
    },
    {
        path: 'dashboard', component: DashboardComponent
    
    },
    {
        path: 'flightslist', component: FlightComponent,
    },
    {
        path: 'aircraftlist', component: AircraftListComponent,
    },
    {
        path: 'login', component: LoginComponent,
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
      ],
      exports: [RouterModule]
    })
    
    export class AppRoutingModule{
    }
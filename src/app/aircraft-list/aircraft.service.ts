import { Injectable } from '@angular/core';
import { Aircraft } from '../flight-hours/aircraft.model';

@Injectable({
  providedIn: 'root'
})
export class AircraftService {

  constructor() { }

  private airplanes: Aircraft[] = [
     new Aircraft("Katana","DV20", "D-EBB"),
    new Aircraft("Boeing 737","B737", "EI-SDHB")
  ];

  getAllAircraft(): Aircraft[]
  {
      return this.airplanes;
  }
}

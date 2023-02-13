import { Aircraft } from "./aircraft.model";

export class Flight
 { 
    constructor(public aircraft:Aircraft,public takeoffTime:Date,public landingTime:Date,public pilots: string){}
 }

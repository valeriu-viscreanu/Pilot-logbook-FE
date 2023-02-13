import { Aircraft } from "./aircraft.model";

export class Flight
 { 
    constructor(private aircraft:Aircraft, private takeoffTime:Date, private landingTime:Date,private pilots: string){}
 }

import { Security } from "../security/security";

export class Position {
    id!: number;
    quantity!: number;
    date!: string;
    security!: Security; 
    // constructor (
    //     public id: number,
    //     public symbol: string){}
        
    
}
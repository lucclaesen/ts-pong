import {Vector} from "./Vector";
import {Rectangle} from "./Rectangle";

export class Ball extends Rectangle {
    
    velocity: Vector;
    
    constructor() {
        super(10, 10);
        this.velocity = new Vector();
    }
} 
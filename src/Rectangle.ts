import {Vector} from "./Vector";

export class Rectangle {
    position: Vector;
    size: Vector;

    constructor(width:number, height:number) {
        this.position = new Vector();
        this.size = new Vector(width, height);
    }

    get left(): number {
        return this.position.x - (this.size.x / 2);
    }

    get right(): number {
        return this.position.x + (this.size.x / 2)
    }

    get top(): number {
        return this.position.y - (this.size.y / 2);
    }

    get bottom(): number {
        return this.position.y + (this.size.y / 2);
    }
}
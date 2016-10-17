import {Rectangle} from "./Rectangle";

export class Player extends Rectangle {

    score: number;

    constructor() {
        super(20, 100);
        this.score = 0;
    }
}
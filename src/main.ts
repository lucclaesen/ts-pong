import {Pong} from "./Pong";
import {PongState} from "./PongState";

const canvas = document.getElementById("pong") as HTMLCanvasElement;
const pong = new Pong(canvas);

canvas.addEventListener('mousemove', event => {
    pong.players[0].position.y = event.offsetY;
});

canvas.addEventListener('click', event => {
    switch(pong.state) {
        case PongState.Stopped:
            pong.start();
            break;
        case PongState.Playing:
            pong.pause();
            break;
        case PongState.Paused:
            pong.resume();
            break;
    }
});

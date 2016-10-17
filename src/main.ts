import {Pong} from "./Pong";

const canvas = document.getElementById("pong") as HTMLCanvasElement;
const pong = new Pong(canvas);

canvas.addEventListener('mousemove', event => {
    pong.players[0].position.y = event.offsetY;
});

canvas.addEventListener('click', event => {
    pong.start();
})

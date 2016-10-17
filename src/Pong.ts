import {Vector} from "./Vector";
import {Rectangle} from "./Rectangle";
import {Ball} from "./Ball";
import {Player} from "./Player";

export class Pong {
    canvas: HTMLCanvasElement;
    context : CanvasRenderingContext2D;
    ball: Ball;
    players: Player[]

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.context = this.canvas.getContext("2d");
        this.ball = new Ball();

        this.players = [
            new Player(),
            new Player(),
        ]

        this.players[0].position.x = 40;
        this.players[0].position.y = this.canvas.height / 2;
        this.players[1].position.x = this.canvas.width - 40;
        this.players[1].position.y = this.canvas.height / 2;

        let lastTime;
        const requestAnimationFrameCallback = (ms: number) => {
            if (lastTime) {
                this.update((ms - lastTime)/1000);
            }
            lastTime = ms;

            // reregister at requestAnimationFrame
            requestAnimationFrame(requestAnimationFrameCallback);
        };
        requestAnimationFrameCallback(0);

        this.reset();
    }

    drawRectangle(rect: Rectangle) {
        this.context.fillStyle = "#fff";
        this.context.fillRect(rect.left, rect.top, rect.size.x, rect.size.y);
    }

    draw() {

        // background
        this.context.fillStyle = "#000";
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

        // the ball
       this.drawRectangle(this.ball);

       // the players
       this.players.forEach(p => this.drawRectangle(p));
    }

    reset(): void {
        this.ball.position.x = this.canvas.width / 2;
        this.ball.position.y = this.canvas.height / 2;
        this.ball.velocity.x = 0;
        this.ball.velocity.y = 0;
    }

    start(): void {
        if (this.ball.velocity.x === 0 && this.ball.velocity.y === 0) {
            this.ball.velocity.x = 300;
            this.ball.velocity.y = 300;
        }
    }

    update(deltaSeconds: number) {
        this.ball.position.x += this.ball.velocity.x * deltaSeconds;
        this.ball.position.y += this.ball.velocity.y * deltaSeconds;

        if (this.ball.left < 0 || this.ball.right > this.canvas.width){
            let scoringPlayerId = this.ball.velocity.x > 0 ? 0 : 1;
            this.players[scoringPlayerId].score++;
            console.log(`player ${scoringPlayerId} raised its score to ${this.players[scoringPlayerId].score}`);
            // this.ball.velocity.x = -this.ball.velocity.x;
            this.reset();
        }

        if (this.ball.top < 0 || this.ball.bottom > this.canvas.height){
            this.ball.velocity.y = -this.ball.velocity.y;
        }

        this.players[1].position.y = this.ball.position.y;

        // test for collision
        this.players.forEach(p => this.collide(p, this.ball));

        this.draw();
    }

    collide(player: Player, ball: Ball): void {
        if (player.left < ball.right && player.right > ball.left &&
            player.top < ball.bottom && player.bottom > ball.top) {
            ball.velocity.x = -ball.velocity.x;
        }
    }
}


export class ScoreChart {
    scoreDiv: HTMLDivElement;

    constructor(scoreDiv: HTMLDivElement) {
        this.scoreDiv = scoreDiv;
    }

    updateScore(playerId:number, score: number): void {
        this.scoreDiv.querySelector(`#score-${playerId}`).innerHTML = score.toString();
    }
}
class Game {
  constructor() {
    this.startScreen = document.querySelector("#startScreen");
    this.gameScreen = document.querySelector("#gameScreen");
    this.boardScreen = document.querySelector("#boardScreen");
    this.handPlayer1 = document.querySelector("#handPlayer1");
    this.handPlayer2 = document.querySelector("#handPlayer2");
    this.gameEndScreen = document.querySelector("#endGame");
    this.height = 100;
    this.width = 100;
    this.cards = [];
    this.hp1 = 2000;
    this.hp2 = 2000;
    this.gameIsOver = false;
  }

  start() {
    this.gameScreen.style.width = `${this.width}vw`;
    this.gameScreen.style.height = `${this.height}vh`;
    this.startScreen.style.display = "none";
    this.gameScreen.style.display = "block";
  }

  drawingHand() {
    const drawedCard = this.createElement("div");
    this.handPlayer1.appendChild(drawedCard);
    this.handPlayer2.appendChild(drawedCard);
  }
}

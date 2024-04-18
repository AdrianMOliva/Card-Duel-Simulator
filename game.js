class Game {
  constructor(player1, deck) {
    this.startScreen = document.querySelector("#startScreen");
    this.gameScreen = document.querySelector("#gameScreen");
    this.boardScreen = document.querySelector("#boardScreen");
    this.handPlayer1 = document.querySelector("#handPlayer1");
    this.handPlayer2 = document.querySelector("#handPlayer2");
    this.gameEndScreen = document.querySelector("#endGame");
    this.height = 100;
    this.width = 100;
    this.hp1 = hpPlayer1.innerText;
    this.hp2 = hpPlayer2.innerText;
    this.player1 = player1;
    this.deck = deck;
    this.gameIsOver = false;
  }

  start() {
    this.gameScreen.style.width = `${this.width}vw`;
    this.gameScreen.style.height = `${this.height}vh`;
    this.startScreen.style.display = "none";
    this.gameScreen.style.display = "block";
  }

  comparePlayedCards() {
    const cardDiv = document.querySelector("#playedCardDiv1 .cardLook");
    const randomCard = document.querySelector("#playedCardDiv2 .cardLook");

    if (!cardDiv || !randomCard) {
      console.log("Error: Unable to find played cards.");
      return;
    }

    const cardPower = parseInt(cardDiv.innerText);
    const randomCardPower = parseInt(randomCard.innerText);

    console.log("Card power P1:", cardPower);
    console.log("Card power P2:", randomCardPower);
    if (isNaN(cardPower) || isNaN(randomCardPower)) {
      console.log("Error: Invalid card power.");
      return;
    }

    const hpPlayer1 = document.querySelector("#hpPlayer1");
    const hpPlayer2 = document.querySelector("#hpPlayer2");
    const resultText = document.querySelector("#resultText");

    let currentHP1 = hpPlayer1.innerText;
    let currentHP2 = hpPlayer2.innerText;

    if (cardPower > randomCardPower) {
      const damageDeal = cardPower - randomCardPower;
      currentHP1 -= damageDeal;
      hpPlayer1.innerText = currentHP1;
      console.log("Player 2 HP:", currentHP1);
    } else if (cardPower < randomCardPower) {
      const damageReceived = randomCardPower - cardPower;
      currentHP2 -= damageReceived;
      hpPlayer2.innerText = currentHP2;
      console.log("Player 1 HP:", currentHP2);
    }

    if (hpPlayer1.innerText < 0) {
      hpPlayer1.innerText = 0;
    } else if (hpPlayer2.innerText < 0) {
      hpPlayer2.innerText = 0;
    }
    if (hpPlayer1.innerText === "0") {
      this.gameIsOver = true;
      this.endGame();
      resultText.innerText = "You win... For Now!";
      const victorySound = new Audio("./sounds/victory.mp3");
      victorySound.volume = 0.01;
      victorySound.play();
      victorySound.loop = true;
      stopBackgroundMusic();
    }

    if (hpPlayer2.innerText === "0") {
      this.gameIsOver = true;
      this.endGame();
      resultText.innerText = "HaHa! You are not worthy to duel me, loser.";
      const loseSound = new Audio("./sounds/lose.mp3");
      loseSound.volume = 0.05;
      loseSound.play();
      stopBackgroundMusic();
    }

    this.resetPlayedCards();
    this.player1.drawCardFromDeck(this.deck);
  }
  resetPlayedCards() {
    const playedCardDiv1 = document.querySelector("#playedCardDiv1");
    const playedCardDiv2 = document.querySelector("#playedCardDiv2");

    while (playedCardDiv1.firstChild) {
      playedCardDiv1.removeChild(playedCardDiv1.firstChild);
    }

    while (playedCardDiv2.firstChild) {
      playedCardDiv2.removeChild(playedCardDiv2.firstChild);
    }
  }

  endGame() {
    this.gameIsOver = true;

    this.gameScreen.style.display = "none";
    this.boardScreen.style.display = "none";

    this.gameEndScreen.style.display = "block";
  }
}

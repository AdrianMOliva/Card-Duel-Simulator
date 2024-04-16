const startButton = document.querySelector("#startButton");
const restartButton = document.querySelector("#restartButton");
let game;

function startGame() {
  game = new Game();
  const deck = new Deck(cardDeck);
  deck.shuffleDeck();

  const player1 = new Player1(
    "Player 1",
    document.querySelector("#handPlayer1")
  );
  const player2 = new Player2(
    "Player 2",
    document.querySelector("#handPlayer2")
  );

  player1.drawStarterHand(deck);
  player2.drawStarterHand(deck);
  game.start();
}

function restartGame() {
  location.reload();
}

startButton.addEventListener("click", startGame);
restartButton.addEventListener("click", restartGame);

//document.querySelector("#playCardButton").addEventListener("click", playCard);

document
  .querySelector("#playCardButton")
  .addEventListener("click", function () {
    playCard();
    playCardPlayer2();
  });

function playCard() {
  const chosenCard = document.querySelector("#handPlayer1 .selected");

  if (chosenCard) {
    chosenCard.classList.remove("selected");
    document.querySelector("#playedCardDiv1").appendChild(chosenCard);
  }
}

function playCardPlayer2() {
  const randomIndex = Math.floor(Math.random() * player2.hand.length);
  const cardToPlay = player2.hand.splice(randomIndex, 1)[0];
  document.getElementById("playedCardDiv2").appendChild(cardToPlay);
}

const startButton = document.querySelector("#startButton");
const restartButton = document.querySelector("#restartButton");
let game;
let player1;
let deck;
let player2;

function startGame() {
  deck = new Deck(cardDeck);
  deck.shuffleDeck();

  player1 = new Player1("Player 1", document.querySelector("#handPlayer1"));
  player2 = new Player2("Player 2", document.querySelector("#handPlayer2"));
  game = new Game(player1, deck);
  player1.drawStarterHand(deck);
  player2.drawStarterHand(deck);
  game.start();
}

function restartGame() {
  location.reload();
}

startButton.addEventListener("click", startGame);
restartButton.addEventListener("click", restartGame);
const hpPlayer1 = document.querySelector("#hpPlayer1");
const hpPlayer2 = document.querySelector("#hpPlayer2");

//document.querySelector("#playCardButton").addEventListener("click", playCard);

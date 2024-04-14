const startButton = document.querySelector("#startButton");
const restartButton = document.querySelector("#restartButton");
let game;

function startGame() {
  game = new Game();
  const deck = new Deck(cardDeck);
  deck.shuffleDeck();

  const player1 = new Player(
    "Player 1",
    document.querySelector("#handPlayer1")
  );
  const player2 = new Player(
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

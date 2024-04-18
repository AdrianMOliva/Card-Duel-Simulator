Card Duel Simulator
Click here to see deployed game: https://adrianmoliva.github.io/Project-Module-1/

Description
This game is a simplified and inspired version of the Yu-Gi-Oh card game. In my game, you are drawing three cards which each of them have a value in the bottom, this value is the power. Once chosen one card, it is played in the board and its power is compared with the rival´s card power. Each player has 2000 HP (Health Points) and the difference between the powers of the played cards is deducted from the HP of the loser of that play.

MVP
-Player draws 3 cards.
-Select a card clicking on the desired one.
-The card is played after clicking the Play Card Button.
-Once a card is played, another card is drawn to have always 3 cards in the hand.
-Play background music if we click in the Play Music button in the initial scree.

Backlog
-Shuffle the deck of cards and refilling it if it is empty.
-Player2 (the bot) draw random cards from the deck and plays them once we play one card.
-Stop music once you win or lose.
-Compare powers of cards and determine which value is higher.
-Subtract the difference between the higher card and the another card and subtract it to the HP.

Data structure
Index.js
-playBackgroundMusic();
-stopBackgroundMusic();
-startGame();
-restartGame();
game.js

Game
-start();
-comparePlayedCards();
-resetPlayedCards();
-endGame();

card.js

Deck
-shuffleCards();
-drawCard();

Player1
-drawStarterHand();
-drawCardFromDeck();
-displayHand();
-selectingCard();
-playCard();

Player2
-drawStarterHand();
-drawCardFromDeck();
-displayHand();
-playCardPlayer2();

States y States Transitions
-Start Screen.
-Game Screen/Board Screen.
-EndGame Screen.

Links

Slides Link
https://slides.com/adrian-moliva/card-duel-simulator/fullscreen

Github repository Link
https://github.com/AdrianMOliva/Project-Module-1

Deployment Link
https://adrianmoliva.github.io/Project-Module-1/

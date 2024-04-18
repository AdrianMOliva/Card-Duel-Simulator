const cardDeck = [
  {
    name: "Blue Eyes Dragon",
    power: 3000,
    cardImage: "../images/BlueEyes.webp",
  },
  {
    name: "Celtic Guardian",
    power: 1400,
    cardImage: "../images/CelticGuardian.webp",
  },
  {
    name: "Baby Dragon",
    power: 1200,
    cardImage: "../images/BabyDragon.webp",
  },
  {
    name: "Curse of Dragon",
    power: 2000,
    cardImage: "../images/CurseofDragon.webp",
  },
  {
    name: "Dark Magician",
    power: 2500,
    cardImage: "../images/DarkMagician.webp",
  },
  {
    name: "Flame Swordsman",
    power: 1800,
    cardImage: "../images/FlameSwordsman.webp",
  },
  {
    name: "Mystical Elf",
    power: 800,
    cardImage: "../images/MysticalElf.webp",
  },
  {
    name: "Summoned Skull",
    power: 2500,
    cardImage: "../images/SummonedSkull.webp",
  },
  {
    name: "Torike",
    power: 1200,
    cardImage: "../images/Torike.webp",
  },
  {
    name: "Swamp BattleGuard",
    power: 1500,
    cardImage: "../images/SwampBattleGuard.webp",
  },
  {
    name: "Joker",
    power: Math.floor(Math.random() * (300 - 10) + 10) * 10,
    cardImage: "../images/Joker.jpg",
  },
  {
    name: "White Magical Hat",
    power: 1000,
    cardImage: "../images/WhiteMagicalHat.webp",
  },
  {
    name: "Red Eyes Dragon",
    power: 2400,
    cardImage: "../images/RedEyes.webp",
  },
  {
    name: "Battle Warrior",
    power: 700,
    cardImage: "../images/BattleWarrior.webp",
  },
  {
    name: "Dream Clown",
    power: 1200,
    cardImage: "../images/DreamClown.webp",
  },
];

class Deck {
  constructor(cards) {
    this.cards = cards;
    this.shuffledCards = [];
  }

  shuffleDeck() {
    this.shuffledCards = [...this.cards];
    for (let i = this.shuffledCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.shuffledCards[i], this.shuffledCards[j]] = [
        this.shuffledCards[j],
        this.shuffledCards[i],
      ];
    }
  }

  drawCard() {
    if (this.shuffledCards.length === 0) {
      console.log("Deck is empty");
      this.shuffleDeck();
    }
    return this.shuffledCards.pop();
  }
}

class Player1 {
  constructor(card, handElement) {
    this.card = card;
    this.hand = [];
    this.handElement = handElement;
    this.maxHandSize = 3;
    this.handElement.addEventListener("click", (event) => {
      if (event.target.classList.contains("cardLook")) {
        this.selectingCard(event.target);
      }
    });
  }

  drawStarterHand(deck) {
    while (this.hand.length < this.maxHandSize) {
      this.drawCardFromDeck(deck);
    }
  }

  drawCardFromDeck(deck) {
    if (this.hand.length < this.maxHandSize) {
      const card = deck.drawCard();
      this.hand.push(card);
      this.displayHand();
    }
  }

  displayHand() {
    this.handElement.innerHTML = "";
    this.hand.forEach((card, index) => {
      const cardDiv = document.createElement("div");
      cardDiv.innerText = card.power;
      cardDiv.classList.add("cardLook");
      cardDiv.style.backgroundImage = `url(${card.cardImage})`;
      cardDiv.dataset.index = index;
      this.handElement.appendChild(cardDiv);
    });
  }

  selectingCard(clickedCard) {
    document.querySelectorAll(".cardLook").forEach((card) => {
      card.classList.remove("selected");
    });

    clickedCard.classList.add("selected");
  }
  playCard(deck) {
    const playedCardSound = new Audio("../sounds/playedCard.wav");
    const chosenCard = document.querySelector("#handPlayer1 .selected");
    const index = chosenCard.dataset.index;
    playedCardSound.volume = 0.2;
    playedCardSound.play();
    if (chosenCard) {
      chosenCard.classList.remove("selected");
      document.querySelector("#playedCardDiv1").appendChild(chosenCard);

      this.hand.splice(index, 1);
    }

    if (this.hand.length < this.maxHandSize) {
      this.drawCardFromDeck(deck);
    }
  }
}

class Player2 {
  constructor(card, handElement) {
    this.card = card;
    this.hand = [];
    this.handElement = handElement;
    this.maxHandSize = 3;
  }

  drawStarterHand(deck) {
    while (this.hand.length < this.maxHandSize) {
      this.drawCardFromDeck(deck);
    }
  }

  drawCardFromDeck(deck) {
    if (this.hand.length < this.maxHandSize) {
      const card = deck.drawCard();
      this.hand.push(card);
      this.displayHand();
    }
  }

  displayHand() {
    this.handElement.innerHTML = "";
    this.hand.forEach((card) => {
      const cardDiv2 = document.createElement("div");

      cardDiv2.classList.add("cardLook");
      cardDiv2.style.backgroundImage = "url(../images/Back-DG-EN-VG.webp)";
      this.handElement.appendChild(cardDiv2);
    });
  }
  playCardPlayer2() {
    const deckLength = cardDeck.length;

    const randomIndex = Math.floor(Math.random() * deckLength);

    const randomCard = cardDeck[randomIndex];
    document.querySelector("#playedCardDiv2").innerHTML = "";

    const cardDiv2 = document.createElement("div");
    cardDiv2.innerText = randomCard.power;
    cardDiv2.classList.add("cardLook");
    cardDiv2.style.backgroundImage = `url(${randomCard.cardImage})`;
    document.querySelector("#playedCardDiv2").appendChild(cardDiv2);
  }
}

document
  .querySelector("#playCardButton")
  .addEventListener("click", function () {
    player1.playCard(deck);
    player2.playCardPlayer2();
    setTimeout(function () {
      game.comparePlayedCards();
    }, 2000);
    setTimeout(function () {
      game.resetPlayedCards();
    }, 3000);
  });

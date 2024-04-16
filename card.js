const cardDeck = [
  {
    name: "Blue Eyes Dragon",
    power: 3000,
    cardImage: "images/BlueEyes.webp",
  },
  {
    name: "Celtic Guardian",
    power: 1400,
    cardImage: "images/CelticGuardian.webp",
  },
  {
    name: "Baby Dragon",
    power: 1200,
    cardImage: "images/BabyDragon.webp",
  },
  {
    name: "Curse of Dragon",
    power: 2000,
    cardImage: "images/CurseofDragon.webp",
  },
  {
    name: "Dark Magician",
    power: 2500,
    cardImage: "images/DarkMagician.webp",
  },
  {
    name: "Flame Swordsman",
    power: 1800,
    cardImage: "images/FlameSwordsman.webp",
  },
  {
    name: "Mystical Elf",
    power: 800,
    cardImage: "images/MysticalElf.webp",
  },
  {
    name: "Summoned Skull",
    power: 2500,
    cardImage: "images/SummonedSkull.webp",
  },
  {
    name: "Torike",
    power: 1200,
    cardImage: "images/Torike.webp",
  },
  {
    name: "Swamp BattleGuard",
    power: 1500,
    cardImage: "images/SwampBattleGuard.webp",
  },
  {
    name: "Joker",
    power: Math.floor(Math.random() * (300 - 10) + 10) * 10,
    cardImage: "images/Joker.jpg",
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
    return this.shuffledCards.pop();
  }
}

class Player {
  constructor(name, handElement) {
    this.name = name;
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
      const cardDiv = document.createElement("div");
      cardDiv.innerText = card.power;
      cardDiv.classList.add("cardLook");
      cardDiv.style.backgroundImage = `url(${card.cardImage})`;
      this.handElement.appendChild(cardDiv);
    });
  }
}

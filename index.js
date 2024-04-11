const cardDeck = [
  {
    name: "Blue Eyes Dragon",
    power: 3000,
    cardImage: "images/BlueEyes",
  },
  {
    name: "Celtic Guardian",
    power: 1400,
    cardImage: "images/CelticGuardian",
  },
  {
    name: "Baby Dragon",
    power: 1200,
    cardImage: "images/BabyDragon",
  },
  {
    name: "Curse of Dragon",
    power: 2000,
    cardImage: "images/CurseofDragon",
  },
  {
    name: "Dark Magician",
    power: 2500,
    cardImage: "images/DarkMagician",
  },
  {
    name: "Flame Swordsman",
    power: 1800,
    cardImage: "images/FlameSwordsman",
  },
  {
    name: "Mystical Elf",
    power: 800,
    cardImage: "images/MysticalElf",
  },
  {
    name: "Summoned Skull",
    power: 2500,
    cardImage: "images/Summoned Skull",
  },
  {
    name: "Torike",
    power: 1200,
    cardImage: "images/Torike",
  },
  {
    name: "Swamp BattleGuard",
    power: 1500,
    cardImage: "images/SwampBattleGuard",
  },
  {
    name: "Joker",
    power: Math.floor(Math.random() * (300 - 10) + 10) * 10,
    cardImage: "images/Joker",
  },
];

const startButton = document.querySelector("#startButton");
const restartButton = document.querySelector("#restartButton");
let game;

function startGame() {
  game = new Game();

  game.start();
}

function restartGame() {
  location.reload();
}

startButton.addEventListener("click", startGame);
restartButton.addEventListener("click", restartGame);

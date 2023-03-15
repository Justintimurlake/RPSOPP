// const playerText = document.querySelector(".playerText");
// const computerText = document.querySelector(".computerText");
// const resultText = document.querySelector(".resultText");
// const choiceBtn = document.querySelectorAll(".choiceBtn");
// let player;
// let computer;
// let result;

// choiceBtn.forEach((button) =>
//   button.addEventListener("click", () => {
//     player = button.value;
//     computerTurn();
//     playerText.textContent = `Player: ${player}`;
//     computerText.textContent = `Computer: ${computer}`;
//     resultText.textContent = checkWinner();
//   })
// );

// function computerTurn() {
//   const randNum = Math.floor(Math.random() * 3) + 1;

//   switch (randNum) {
//     case 1:
//       computer = "ROCK";
//       break;
//     case 2:
//       computer = "PAPER";
//       break;
//     case 3:
//       computer = "SCISSORS";
//       break;
//   }
// }

// function checkWinner() {
//   if (player == computer) {
//     return "Draw";
//   } else if (computer == "ROCK") {
//     return player == "PAPER" ? "You Win!" : "You Lose!";
//   } else if (computer == "SCISSORS") {
//     return player == "ROCK" ? "You Win!" : "You Lose!";
//   } else if (computer == "PAPER") {
//     return player == "SCISSORS" ? "You Win!" : "You Lose!";
//   }
// }

class Game {
  constructor() {
    this.playerText = document.querySelector(".playerText");
    this.computerText = document.querySelector(".computerText");
    this.resultText = document.querySelector(".resultText");
    this.choiceBtn = document.querySelectorAll(".choiceBtn");
    this.player;
    this.computer;
    this.result;
    this.init();
  }

  init() {
    this.choiceBtn.forEach((button) =>
      button.addEventListener("click", () => {
        this.player = button.value;
        this.computerTurn();
        this.playerText.textContent = `Player: ${this.player}`;
        this.computerText.textContent = `Computer: ${this.computer}`;
        this.resultText.textContent = this.checkWinner();
      })
    );
  }

  computerTurn() {
    const randNum = Math.floor(Math.random() * 3) + 1;

    this.computer =
      randNum === 1
        ? "ROCK"
        : randNum === 2
        ? "PAPER"
        : randNum === 3
        ? "SCISSORS"
        : null;
  }

  checkWinner() {
    if (this.player == this.computer) {
      return "Draw";
    } else if (this.computer == "ROCK") {
      return this.player == "PAPER" ? "You Win!" : "You Lose!";
    } else if (this.computer == "SCISSORS") {
      return this.player == "ROCK" ? "You Win!" : "You Lose!";
    } else if (this.computer == "PAPER") {
      return this.player == "SCISSORS" ? "You Win!" : "You Lose!";
    }
  }
}

const game = new Game();

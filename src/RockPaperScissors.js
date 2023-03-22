const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

const WIN = "You win!";
const LOSE = "You lose!";
const DRAW = "It's a draw.";

// Get the images and add click event listeners to them
const rockImg = document.getElementById("rock");
rockImg.addEventListener("click", () => playGame(ROCK));

const paperImg = document.getElementById("paper");
paperImg.addEventListener("click", () => playGame(PAPER));

const scissorsImg = document.getElementById("scissors");
scissorsImg.addEventListener("click", () => playGame(SCISSORS));

// Play the game based on user's choice
function playGame(userChoice) {
  const computerChoice = getComputerChoice();
  const result = getResult(userChoice, computerChoice);

  alert(`You chose ${userChoice}.\nComputer chose ${computerChoice}.\n${result}`);
}

// Get a random choice for the computer
function getComputerChoice() {
  const choices = [ROCK, PAPER, SCISSORS];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Get the result of the game
function getResult(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return DRAW;
  } else if (
    (userChoice === ROCK && computerChoice === SCISSORS) ||
    (userChoice === PAPER && computerChoice === ROCK) ||
    (userChoice === SCISSORS && computerChoice === PAPER)
  ) {
    return WIN;
  } else {
    return LOSE;
  }
}

const options = ["rock", "paper", "scissors", "lizard", "spock"];

function getComputerChoice() {
    const computerChoice = options[Math.floor(Math.random() * options.length)];
    console.log `${computerChoice}`;
}

getComputerChoice();

function getPlayerChoice() {
    const playerChoice = prompt(`Choose your weapon`, ``);
    const playerChoiceLowerCase = playerChoice.toLowerCase();
    console.log `${playerChoiceLowerCase}`;
}

getPlayerChoice();
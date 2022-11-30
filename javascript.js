const choices = ["rock", "paper", "scissors", "lizard", "spock"];

function getComputerChoice() {
    let computerChoice = choices[Math.floor(Math.random() * 5)];
    console.log `${computerChoice}`;
}

getComputerChoice();

/*
[Math.random() * (max-min) + min] returns a random number < max and >= min.
In the array "choices" there are 5 items, [0] [1] [2] [3] [4].
So I use [(Math.random() * (5-0) + 0)] simplified as [(Math.random() * 5)]
to return a number < 5 and >= 0.

Math.floor() rounds down to the nearest integer,
thus the function returns an integer between 0 and 4.

Could also use choices.length instead of 5.
*/

function getPlayerChoice() {
    let playerChoice = prompt(`Choose your weapon`, ``);
    playerChoice = playerChoice.toLowerCase();
    console.log `${playerChoice}`;
}

getPlayerChoice();

function matchUp(computerChoice, playerChoice) {

}
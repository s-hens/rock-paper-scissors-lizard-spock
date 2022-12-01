const choices = ["rock", "paper", "scissors", "lizard", "spock"];

function getComputerChoice() {
    let computerSelection = choices[Math.floor(Math.random() * 5)];
    return(computerSelection);
}

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
    let playerSelection = prompt(`Choose your weapon`, ``);
    playerSelection = playerSelection.toLowerCase();
    return(playerSelection);
}

function playRound(computerSelection, playerSelection) {
    computerSelection = getComputerChoice();
    playerSelection = getPlayerChoice();
    console.log(`Computer chose ${computerSelection}, player chose ${playerSelection}.`);
    }

playRound();
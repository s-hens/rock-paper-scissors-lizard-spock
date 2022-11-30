const options = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];

function getComputerChoice() {
    const computerChoice = options[Math.floor(Math.random() * options.length)];
    console.log `${computerChoice}`;
}

getComputerChoice();
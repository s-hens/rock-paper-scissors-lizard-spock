const choices = ["rock", "paper", "scissors", "lizard", "spock"];

/*
Line 1:
Functions can refer to array "choices" because it is declared globally.
*/

function getComputerChoice() {
    let computerSelection = choices[Math.floor(Math.random() * 5)];
    return(computerSelection);
}

/*
Line 9:
[Math.random() * (max-min) + min] returns a random number < max and >= min.
In the array "choices" there are 5 items, [0] [1] [2] [3] [4].
So I use [(Math.random() * (5-0) + 0)] simplified as [(Math.random() * 5)] to return a number < 5 and >= 0.

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
    console.log(`Computer chose ${computerSelection}. Player chose ${playerSelection}.`);
    switch (true) {
        /* Tie */
        case computerSelection == playerSelection:
            alert(`It's a tie! You both selected ${playerSelection}.`)
            break;
        /* Computer chooses rock */
        case computerSelection == "rock" && playerSelection == "paper":
            alert(`You win! Paper covers rock.`)
            break;
        case computerSelection == "rock" && playerSelection == "scissors":
            alert(`You lose! Rock crushes scissors.`)
            break;
        case computerSelection == "rock" && playerSelection == "lizard":
            alert(`You lose! Rock crushes lizard.`)
            break;
        case computerSelection == "rock" && playerSelection == "spock":
            alert(`You win! Spock vapourises rock.`)
            break;
        /* Computer chooses paper */
        case computerSelection == "paper" && playerSelection == "rock":
            alert(`You lose! Paper covers rock.`)
            break;
        case computerSelection == "paper" && playerSelection == "scissors":
            alert(`You win! Scissors cut paper.`)
            break;
        case computerSelection == "paper" && playerSelection == "lizard":
            alert(`You win! Lizard eats paper.`)
            break;
        case computerSelection == "paper" && playerSelection == "spock":
            alert(`You lose! Paper disproves Spock.`)
            break;
        /* Computer chooses scissors */
        case computerSelection == "scissors" && playerSelection == "rock":
            alert(`You win! Rock crushes scissors.`)
        case computerSelection == "scissors" && playerSelection == "paper":
            alert(`You lose! Scissors cut paper.`)
            break;
        case computerSelection == "scissors" && playerSelection == "lizard":
            alert(`You lose! Scissors decapitate lizard.`)
            break;
        case computerSelection == "scissors" && playerSelection == "spock":
            alert(`You win! Spock smashes scissors.`)
            break;
        /* Computer chooses lizard */
        case computerSelection == "lizard" && playerSelection == "rock":
            alert(`You win! Rock crushes lizard.`)
            break;
        case computerSelection == "lizard" && playerSelection == "paper":
            alert(`You lose! Lizard eats paper.`)
            break;
        case computerSelection == "lizard" && playerSelection == "scissors":
            alert(`You win! Scissors decapitate lizard.`)
            break;
        case computerSelection == "lizard" && playerSelection == "spock":
            alert(`You lose! Lizard poisons Spock.`)
            break;
        /* Computer chooses spock */
        case computerSelection == "spock" && playerSelection == "rock":
            alert(`You lose! Spock vapourises rock.`)
            break;
        case computerSelection == "spock" && playerSelection == "paper":
            alert(`You win! Paper disproves Spock.`)
             break;
        case computerSelection == "spock" && playerSelection == "scissors":
            alert(`You lose! Spock smashes scissors.`)
            break;
        case computerSelection == "spock" && playerSelection == "lizard":
            alert(`You win! Lizard poisions Spock.`)
            break;
        /* Player goes rogue */
        default:
            alert(`Hey! ${playerSelection} is not a valid choice. Please choose rock, scissors, lizard, or spock.`)
    }
    }

playRound();

/*
Lines 32-33:
Variables computerSelection and playerSelection were originally declared only within the scope of functions getComputerChoice and getPlayerChoice.
So I must define them within the scope of function playRound, otherwise they return "undefined".
I do this by running functions getComputerChoice and getPlayerChoice inside function playRound.
*/
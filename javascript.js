const playerScoreDiv = document.querySelector("#playerScoreDiv");
const computerScoreDiv = document.querySelector("#computerScoreDiv");
const playerIconDiv = document.querySelector("#playerIconDiv");
const computerIconDiv = document.querySelector("#computerIconDiv");
const battleCommentaryDiv = document.querySelector("#battleCommentaryDiv");

const choices = ["rock", "paper", "scissors", "lizard", "spock"];
let computerScore = 0;
let playerScore = 0;

function getComputerChoice() {
    let computerSelection = choices[Math.floor(Math.random() * 5)];
    return(computerSelection);
}

function getPlayerChoice() {
    let playerSelection = document.activeElement.id;
    return(playerSelection);
}

function playRound(computerSelection, playerSelection) {
    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();
    //Icons to show what the computer chose
    switch(true) {
        case computerSelection == "rock":
            computerIconDiv.innerHTML = `<img src="./images/rock.png">`;
            break;
        case computerSelection == "paper":
            computerIconDiv.innerHTML = `<img src="./images/paper.png">`;
            break;
        case computerSelection == "scissors":
            computerIconDiv.innerHTML = `<img src="./images/scissors.png">`;
            break;
        case computerSelection == "lizard":
            computerIconDiv.innerHTML = `<img src="./images/lizard.png">`;
            break;
        case computerSelection == "spock":
            computerIconDiv.innerHTML = `<img src="./images/spock.png">`;
            break;
        default:
            computerIconDiv.textContent = ``;
    }
    //Icons to show what the player chose
    switch(true) {
        case playerSelection == "rock":
            playerIconDiv.innerHTML = `<img src="./images/rock.png">`;
            break;
        case playerSelection == "paper":
            playerIconDiv.innerHTML = `<img src="./images/paper.png">`;
            break;
        case playerSelection == "scissors":
            playerIconDiv.innerHTML = `<img src="./images/scissors.png">`;
            break;
        case playerSelection == "lizard":
            playerIconDiv.innerHTML = `<img src="./images/lizard.png">`;
            break;
        case playerSelection == "spock":
            playerIconDiv.innerHTML = `<img src="./images/spock.png">`;
            break;
        default:
            playerIconDiv.textContent = ``;
    }
    switch (true) {
        //Tie
        case computerSelection == playerSelection:
            battleCommentaryDiv.textContent = `It's a tie! You both selected ${playerSelection}.`;
            break;
        //Computer chooses rock
        case computerSelection == "rock" && playerSelection == "paper":
            battleCommentaryDiv.innerHTML = `<span class="winSpan">You win!</span> Paper covers rock.`;
            playerScore = playerScore + 1;
            break;
        case computerSelection == "rock" && playerSelection == "scissors":
            battleCommentaryDiv.innerHTML = `<span class="loseSpan">You lose!</span> Rock crushes scissors.`;
            computerScore = computerScore +1;
            break;
        case computerSelection == "rock" && playerSelection == "lizard":
            battleCommentaryDiv.innerHTML = `<span class="loseSpan">You lose!</span> Rock crushes lizard.`;
            computerScore = computerScore +1;
            break;
        case computerSelection == "rock" && playerSelection == "spock":
            battleCommentaryDiv.innerHTML = `<span class="winSpan">You win!</span> Spock vapourises rock.`;
            playerScore = playerScore + 1;
            break;
        //Computer chooses paper
        case computerSelection == "paper" && playerSelection == "rock":
            battleCommentaryDiv.innerHTML = `<span class="loseSpan">You lose!</span> Paper covers rock.`;
            computerScore = computerScore +1;
            break;
        case computerSelection == "paper" && playerSelection == "scissors":
            battleCommentaryDiv.innerHTML = `<span class="winSpan">You win!</span> Scissors cut paper.`;
            playerScore = playerScore + 1;
            break;
        case computerSelection == "paper" && playerSelection == "lizard":
            battleCommentaryDiv.innerHTML = `<span class="winSpan">You win!</span> Lizard eats paper.`;
            playerScore = playerScore + 1;
            break;
        case computerSelection == "paper" && playerSelection == "spock":
            battleCommentaryDiv.innerHTML = `<span class="loseSpan">You lose!</span> Paper disproves Spock.`;
            computerScore = computerScore +1;
            break;
        //Computer chooses scissors
        case computerSelection == "scissors" && playerSelection == "rock":
            battleCommentaryDiv.innerHTML = `<span class="winSpan">You win!</span> Rock crushes scissors.`;
            playerScore = playerScore + 1;
            break;
        case computerSelection == "scissors" && playerSelection == "paper":
            battleCommentaryDiv.innerHTML = `<span class="loseSpan">You lose!</span> Scissors cut paper.`;
            computerScore = computerScore +1;
            break;
        case computerSelection == "scissors" && playerSelection == "lizard":
            battleCommentaryDiv.innerHTML = `<span class="loseSpan">You lose!</span> Scissors decapitate lizard.`;
            computerScore = computerScore +1;
            break;
        case computerSelection == "scissors" && playerSelection == "spock":
            battleCommentaryDiv.innerHTML = `<span class="winSpan">You win!</span> Spock smashes scissors.`;
            playerScore = playerScore + 1;
            break;
        //Computer chooses lizard
        case computerSelection == "lizard" && playerSelection == "rock":
            battleCommentaryDiv.innerHTML = `<span class="winSpan">You win!</span> Rock crushes lizard.`;
            playerScore = playerScore + 1;
            break;
        case computerSelection == "lizard" && playerSelection == "paper":
            battleCommentaryDiv.innerHTML = `<span class="loseSpan">You lose!</span> Lizard eats paper.`;
            computerScore = computerScore +1;
            break;
        case computerSelection == "lizard" && playerSelection == "scissors":
            battleCommentaryDiv.innerHTML = `<span class="winSpan">You win!</span> Scissors decapitate lizard.`;
            playerScore = playerScore + 1;
            break;
        case computerSelection == "lizard" && playerSelection == "spock":
            battleCommentaryDiv.innerHTML = `<span class="loseSpan">You lose!</span> Lizard poisons Spock.`;
            computerScore = computerScore +1;
            break;
        //Computer chooses spock
        case computerSelection == "spock" && playerSelection == "rock":
            battleCommentaryDiv.innerHTML = `<span class="loseSpan">You lose!</span> Spock vapourises rock.`;
            computerScore = computerScore +1;
            break;
        case computerSelection == "spock" && playerSelection == "paper":
            battleCommentaryDiv.innerHTML = `<span class="winSpan">You win!</span> Paper disproves Spock.`;
            playerScore = playerScore + 1;
             break;
        case computerSelection == "spock" && playerSelection == "scissors":
            battleCommentaryDiv.innerHTML = `<span class="loseSpan">You lose!</span> Spock smashes scissors.`;
            computerScore = computerScore +1;
            break;
        case computerSelection == "spock" && playerSelection == "lizard":
            battleCommentaryDiv.innerHTML = `<span class="winSpan">You win!</span> Lizard poisions Spock.`;
            playerScore = playerScore + 1;
            break;
        //Player goes rogue
        default:
            alert(`Hey! ${playerSelection} is not a valid choice. Please choose rock, paper, scissors, lizard, or spock.`);
    }
    playerScoreDiv.textContent = `Player Score: ${playerScore}`;
    computerScoreDiv.textContent = `Computer Score: ${computerScore}`;
    if (playerScore >= 5 && computerScore < 5) {
        battleCommentaryDiv.innerHTML = `<span class="winSpan">You win the round!</span><p><form action="./index.html"><input type="submit" value="Play again?"></form></p>`;
        computerIconDiv.textContent = ``;
        playerIconDiv.textContent = ``;
        computerIconDiv.style.cssText = `height: auto;`
        playerIconDiv.style.cssText = `height: auto;`
        computerScore = 0;
        playerScore = 0;
    } else if (computerScore >= 5 && playerScore <5) {
        battleCommentaryDiv.innerHTML = `<span class="loseSpan">Computer wins the round!</span><p><form action="./index.html"><input type="submit" value="Play again?"></form></p>`;
        computerIconDiv.textContent = ``;
        playerIconDiv.textContent = ``;
        computerIconDiv.style.cssText = `height: auto;`
        playerIconDiv.style.cssText = `height: auto;`
        computerScore = 0;
        playerScore = 0;
    }
}

const rock = document.querySelector("#rock");
rock.addEventListener("click", playRound);

const paper = document.querySelector("#paper");
paper.addEventListener("click", playRound);

const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", playRound);

const lizard = document.querySelector("#lizard");
lizard.addEventListener("click", playRound);

const spock = document.querySelector("#spock");
spock.addEventListener("click", playRound);
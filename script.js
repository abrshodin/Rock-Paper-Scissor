// get random computer choice
function getComputerChoice() {
    let items = ["ROCK", "PAPER", "SCISSOR"];

    return items[Math.floor(Math.random() * items.length)];
}

let userCounter = 0;
let computerCounter = 0;

// enable to play one round of rock-paper-scissor game.
function playRound(playerChoice, computerChoice) {
    
    if(playerChoice == "SCISSOR") {
        if(computerChoice == "PAPER") {
            userCounter++;
            return "You Win! Scissor beats Paper.";
        }
        else if(computerChoice == "ROCK") {
            computerCounter++;
            return "You Lose! Rock beats Scissor."; 
        }
        else if(computerChoice == "SCISSOR")
            return "It's Tie!";
    }
    else if(playerChoice == "PAPER") {
        if(computerChoice == "ROCK") {
            userCounter++;
            return "You Win! Paper beats Rock."; 
        }
        else if(computerChoice == "SCISSOR") {
            computerCounter++;
            return "You Lose! Scissor beats Paper."; 
        }
        else if(computerChoice == "PAPER")
            return "It's Tie!";
    }
    else if(playerChoice == "ROCK") {
        if(computerChoice == "Scissor") {
            userCounter++;
            return "You Win! Rock beats Scissor.";
        }
        else if(computerChoice == "PAPER") {
            computerCounter++;
            return "You Lose! Paper beats Rock.";
        }
        else if(computerChoice == "ROCK")
            return "It's Tie!";
    }
}
// Simple javascript program to play Rock-Paper-Scissor in the console with the computer.

// get random computer choice
function getComputerChoice() {
    let items = ["ROCK", "PAPER", "SCISSOR"];

    return items[Math.floor(Math.random() * items.length)];
}

// variable to store the match result
let userCounter = 0;
let computerCounter = 0;

// evaluate the choices and determine the winner based on the game rules
function playGame(playerChoice, computerChoice) {

    // if...else statement to determine the game result
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
        if(computerChoice == "SCISSOR") {
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

// to play one round of game
function playRound(event) {
    
    // obtain user choice
    let userChoice = event.target.name;
    
    // obtain computer choice
     let computerChoice = getComputerChoice();

     // play the game
     alert(playGame(userChoice, computerChoice));

     // display the result
     if(userCounter <= 5 && computerCounter <= 5)
        div.innerHTML = `<p>User Score: ${userCounter}<br> Computer Score: ${computerCounter}</p>`;

     if(userCounter == 5 && computerCounter < 5) {
         div.insertAdjacentText("beforeend", `Total Result: You've won ${userCounter} to ${computerCounter}`);
         userCounter = 0;
         computerCounter = 0;
    }

     if(computerCounter == 5 && userCounter < 5) {
        div.insertAdjacentText("beforeend", `Total Result: You've Lost ${userCounter} to ${computerCounter}`);
        userCounter = 0;
        computerCounter = 0;
    }

    if(userCounter == 5 && computerCounter == 5){
        div.insertAdjacentText('afterend', "Total Result: Draw");
        userCounter = 0;
        computerCounter = 0;
    }
}

// targeting the button elements
const buttons = document.querySelectorAll("button");

// targeting the div container
const div = document.querySelector("#result-container");

// converting the NodeList into an array
Array.from(buttons);

// to add a listener for very button
function listenerForButtons(button) {
    button.addEventListener("click", playRound);
}

// adding listener to every button
buttons.forEach(listenerForButtons);


























   

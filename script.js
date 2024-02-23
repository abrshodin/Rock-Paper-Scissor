// get random computer choice
function getComputerChoice() {
    let items = ["ROCK", "PAPER", "SCISSOR"];

    return items[Math.floor(Math.random() * items.length)];
}


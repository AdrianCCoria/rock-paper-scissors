let playerWins = 0;
let computerWins = 0;

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

// console.log(getComputerChoice());

function playRound(playerSelection,computerSelection) {
   if (playerSelection === computerSelection) {
    console.log("TIE!");
   } else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            console.log("Computer chose paper!");
            console.log("Paper beats Rock - You Lose!");
            computerWins += 1;
        } else {
            console.log("Computer chose scissors!");
            console.log("Rock beats scissors - You Win!");
            playerWins += 1;
        }
   } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            console.log("Computer chose rock!");
            console.log("Paper beats Rock - You Win!");
            playerWins += 1;
        } else {
            console.log("Computer chose scissors!");
            console.log("Scissors beat Paper - You Lose!");
            computerWins += 1;
        } 
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            console.log("Computer chose rock!");
            console.log("Rock beats Scissors - You Lose!");
            computerWins += 1;
        } else {
            console.log("Computer chose paper!");
            console.log("Scissors beat Paper - You Win!");
            playerWins += 1;
        } 
    } else {
        alert("Not a valid choice - Try Again");
        playRound(getUserInput(),getComputerChoice());
    }
}

function getUserInput() {
    let input = prompt("Enter: rock, paper, or scissors").toLowerCase();
    return input;
}

function displayScore() {
    console.log("Player: ", playerWins);
    console.log("Computer: ", computerWins);
}

// playRound(getUserInput(),getComputerChoice());
// console.log(getUserInput());

function game() {
    for (let i = 0; i < 5; i++) {
        console.log("Round ", i + 1);
        playRound(getUserInput(),getComputerChoice());
        displayScore();
    }
    if (playerWins > computerWins) {
        alert("YOU WON THE GAME");
    } else {
        alert("YOU LOST - GAME OVER");
    }
}

game();

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
        } else {
            console.log("Computer chose scissors!");
            console.log("Rock beats scissors - You Win!");
        }
   } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            console.log("Computer chose rock!");
            console.log("Paper beats Rock - You Win!");
        } else {
            console.log("Computer chose scissors!");
            console.log("Scissors beat Paper - You Lose!");
        } 
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            console.log("Computer chose rock!");
            console.log("Rock beats Scissors - You Lose!");
        } else {
            console.log("Computer chose paper!");
            console.log("Scissors beat Paper - You Win!");
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

playRound(getUserInput(),getComputerChoice());

// console.log(getUserInput());

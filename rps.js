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

function playRound(e) {
    const playerSelection = e.target.id;
    if (!playerSelection) return;
    const computerSelection = getComputerChoice();

    let result;

   if (playerSelection === computerSelection) {
    result = "TIE!";
   } else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            result = "Computer chose paper! Paper beats Rock";
            computerWins += 1;
        } else {
            result = "Computer chose scissors! Rock beats scissors"
            playerWins += 1;
        }
   } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            result = "Computer chose rock! Paper beats Rock";
            playerWins += 1;
        } else {
            result = "Computer chose scissors! Scissors beat Paper";
            computerWins += 1;
        } 
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            result = "Computer chose rock! Rock beats Scissors";
            computerWins += 1;
        } else {
            result = "Computer chose paper! Scissors beat Paper";
            playerWins += 1;
        } 
    } else {
        result = "Not a valid choice - try again";
    }

    const resultDiv = document.createElement('div');
    resultDiv.textContent = result;

    const parentDiv = document.querySelector('#results');
    parentDiv.innerHTML = '';
    parentDiv.appendChild(resultDiv);

    displayScore();

    checkWinner();
}

function displayScore() {
    const scoreDiv = document.createElement('div');
    scoreDiv.textContent = `Player Wins: ${playerWins} - Computer Wins: ${computerWins}`;
    
    const parentDiv = document.querySelector('#score');
    parentDiv.innerHTML = '';
    parentDiv.appendChild(scoreDiv);
}

function checkWinner() {
    if (playerWins === 5 || computerWins === 5) {
        const winner = (playerWins > computerWins) ? "You Win the Game!" : "You Lose the Game!";
        const winnerDiv = document.createElement('div');
        winnerDiv.textContent = winner;

        document.body.appendChild(winnerDiv);

        const buttons = document.querySelectorAll('button');
        buttons.forEach(button => {
            button.removeEventListener('click', playRound);
            button.disabled = true;
        });
    }
}

window.addEventListener("click", playRound);

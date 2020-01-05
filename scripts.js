function computerPlay () {
    random = Math.random();
    if (random <= 0.33) {
        return "Rock";
    } else if (random <= 0.66) {
        return "Paper";
    } else {
        return "Scissors";
    };
}

function playRound () {
    let playerSelection = prompt("Choose your weapon: Rock, Paper or Scissors?");
    let computerSelection = computerPlay();

    if (playerSelection === computerSelection) {
        console.log(`You choose the same that CPU. It's a tie!`);
    } else if ((playerSelection === "Rock" && computerSelection === "Scissors") || (playerSelection === "Paper" && computerSelection === "Rock") || (playerSelection === "Scissors" && computerSelection === "Paper")) {
        console.log(`Great! You choose ${playerSelection} and CPU chooses ${computerSelection}.`);
    } else if ((playerSelection === "Rock" && computerSelection === "Paper") || (playerSelection === "Paper" && computerSelection === "Scissors") || (playerSelection === "Scissors" && computerSelection === "Rock")) {
        console.log(`Ouch! You choose ${playerSelection} and CPU chooses ${computerSelection}.`);
    } else {
        console.log("Sorry, you entered an invalid weapon. Please write 'Rock', 'Paper' or 'Scissors'.")
    }
}

const playerName = prompt("Please, enter your name.");
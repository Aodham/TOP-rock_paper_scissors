let playerScore = 0;
let cpuScore = 0;
let round = 0;

let startGame = "Y";

function cpuPlay () {
    random = Math.random();
    if (random <= 0.33) {
        return "Rock";
    } else if (random <= 0.66) {
        return "Paper";
    } else {
        return "Scissors";
    };
}

function capitalize (text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

function playRound () {
    let playerWeapon = capitalize(prompt("Please, choose your weapon.\nRock, Paper or Scissors?"));
    let cpuWeapon = cpuPlay();

    let roundMessage = `You choose ${playerWeapon}, CPU chooses ${cpuWeapon}. `;

    if (playerWeapon == cpuWeapon) {
        return roundMessage + "It's a tie";
    } else if ((playerWeapon == "Rock" && cpuWeapon == "Scissors")
    || (playerWeapon == "Paper" && cpuWeapon == "Rock")
    || (playerWeapon == "Scissors" && cpuWeapon == "Paper")) {
        playerScore ++;
        return roundMessage + "You win this round.";
    } else {
        cpuScore ++;
        return roundMessage + "You loose this round.";
    }
    round ++;
}

function game () {
    for (round = 0; round < 5; round ++) {
        console.log(playRound());
    }

    if (playerScore > cpuScore) {
            console.log("Great! You win this game.");
    } else if (playerScore === cpuScore) {
            console.log("Mmm, you've tied against the CPU.")
    } else {
            console.log("Ouch! You loose this game.");
    }

    console.log(`You have won ${playerScore} rounds. CPU has won ${cpuScore} rounds.`)

    playerScore = 0;
    cpuScore = 0;

    startGame = prompt("Do you want to start another game?\nY to yes, N to no.")
}

while (startGame.charAt(0).toUpperCase() === "Y") {
    game();
}

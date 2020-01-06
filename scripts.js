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

function capitalize (text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

function playRound () {
    playerWeapon = capitalize(prompt("Please, choose your weapon.\nRock, Paper or Scissors?"))
    console.log(playerWeapon);
}
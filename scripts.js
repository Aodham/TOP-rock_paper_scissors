let playerScore = 0;
let cpuScore = 0;
let round = 1;

let startGame = true;

const container = document.querySelector("#container");
const content = document.createElement("p");

function cpuPlay () {
    const weapons = ["Rock", "Paper", "Scissors"];
    return weapons[Math.floor(Math.random()*weapons.length)];
}

let capitalize = (text) =>{
    return text.charAt(0).toUpperCase() + text.slice(1);
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (round < 5){
            let playerWeapon = capitalize(button.id);
            let cpuWeapon = cpuPlay();
            let message = `Round ${round} of 5.<br>You choose ${playerWeapon}, CPU chooses ${cpuWeapon}.<br>Player Score: ${playerScore}<br>CPU Score: ${cpuScore}`;
            if (playerWeapon == cpuWeapon) {
                content.innerHTML = message + "<br>It's a tie";
            } else if ((playerWeapon == "Rock" && cpuWeapon == "Scissors")
            || (playerWeapon == "Paper" && cpuWeapon == "Rock")
            || (playerWeapon == "Scissors" && cpuWeapon == "Paper")) {
                playerScore ++;
                content.innerHTML = message + "<br>You win this round.";
            } else {
                cpuScore ++;
                content.innerHTML = message + "<br>You loose this round.";
            }
            round ++;
        } else {
            
        }
    })
});
container.appendChild(content);
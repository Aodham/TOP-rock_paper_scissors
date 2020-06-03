// Constants

const infoPanel = document.querySelector('#info');
const buttons = document.querySelectorAll('button');
const arenaButtons = document.querySelectorAll('#arena button');
const reset = document.querySelector('#reset');

let playerWeaon;
let playerScore = 0;
let cpuWeapon;
let cpuScore = 0;
let round = 1;


// Functions

let capitalize = (text) => {
	return text.charAt(0).toUpperCase() + text.slice(1);
}

let cpuPlay = () => {
	const weapons = ["Rock", "Paper", "Scissors"];
	return weapons[Math.floor(Math.random()*weapons.length)];
}

let restart = () => {
	playerScore = 0;
	cpuScore = 0;
	round = 1;
	infoPanel.innerHTML = "^^ Choose your weapon ^^";
	reset.style.display = "none";
}


// Listeners

arenaButtons.forEach((button) => {
	button.addEventListener('click', (e) => {
		reset.style.display = "block";
		playerWeapon = capitalize(button.id);
		cpuWeapon = cpuPlay();
		let showInfo = (Message) => {
			infoPanel.innerHTML = `Round ${round}.<br>---<br>You choose ${playerWeapon}, CPU chooses ${cpuWeapon}.<br>${Message}.<br>---<br>Player Score: ${playerScore}<br>CPU Score: ${cpuScore}`
		}
		if (playerWeapon == cpuWeapon) {
			showInfo("It's a tie");
		} else if ((playerWeapon == "Rock" && cpuWeapon == "Scissors") || (playerWeapon == "Paper" && cpuWeapon == "Rock") || (playerWeapon == "Scissors" && cpuWeapon == "Paper")) {
			playerScore ++;
			showInfo("You win this round");
		} else {
			cpuScore ++;
			showInfo("You loose this round");
		}
		round ++;
	})
})

reset.addEventListener('click', (e) => {
	restart();
})
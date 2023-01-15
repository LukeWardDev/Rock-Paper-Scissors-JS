const info = document.querySelector('.info');
const pScore = document.querySelector('.pScore');
const cScore = document.querySelector('.comScore');
const roundDisplay = document.querySelector('.roundNum');
const rockIcon = document.querySelector('#rock');
const paperIcon = document.querySelector('#paper');
const scissorsIcon = document.querySelector('#scissors');
const playButton = document.querySelector('.playRound');

let playerChoice;
let comChoice;
let round = 0;
let playerScore = 0;
let comScore = 0;


function getComputerChoice(){
    let randomNum = Math.floor(Math.random() * 3) 
    if(randomNum == 0){
        return "Rock"
    } else if (randomNum == 1){
        return "Paper"
    } else {
        return "Scissors"
    }
}

/*
0 = draw
1 = player win
2 = computer win
*/
function playRound(pChoice, cChoice){
    if(pChoice == "Rock" && cChoice == "Rock"){
        return 0
    } else if (pChoice == "Rock" && cChoice == "Paper"){
        comScore++;
    } else if (pChoice == "Rock" && cChoice == "Scissors"){
        playerScore++;
    } else if (pChoice == "Scissors" && cChoice == "Scissors"){
        return 0
    } else if (pChoice == "Scissors" && cChoice == "Rock"){
        comScore++;
    } else if (pChoice == "Scissors" & cChoice == "Paper"){
        playerScore++;
    } else if (pChoice == "Paper" && cChoice == "Paper"){
        return 0
    } else if (pChoice == "Paper" && cChoice == "Scissors"){
        comScore++;
    } else {
        playerScore++;
    }
}

function updateUI(message){
    pScore.textContent = `${playerScore}`;
    cScore.textContent = `${comScore}`;
    roundDisplay.textContent = `${round}`;
    info.textContent = message;
}

rockIcon.addEventListener('click', () => {
    playerChoice = "Rock";
    message = "Your current choice is Rock";
    updateUI();
});

paperIcon.addEventListener('click', () => {
    playerChoice = "Paper";
    message = "Your current choice is Paper";
    updateUI();
});

scissorsIcon.addEventListener('click', () => {
    playerChoice = "Scissors";
    message = "Your current choice is Scissors";
    updateUI();
});

playButton.addEventListener('click', () => {
    comChoice = getComputerChoice();
    playRound(playerChoice, comChoice);
    updateUI();
    round++;
});


const info = document.querySelector('.info');
const roundOutcome = document.querySelector('.roundOutcome');
const pScore = document.querySelector('.pScore');
const cScore = document.querySelector('.comScore');
const roundDisplay = document.querySelector('.roundNum');
const rockIcon = document.querySelector('#rock');
const paperIcon = document.querySelector('#paper');
const scissorsIcon = document.querySelector('#scissors');
const playButton = document.querySelector('.playRound');
const resetButton = document.querySelector('#resetButton');

let playerChoice = "";
let comChoice;
let round = 0;
let playerScore = 0;
let comScore = 0;
let message = "Welcome to rock paper scissors. Please make your first choice."
let roundOutcomeMesg = "";



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
        roundOutcomeMesg = "This round was a draw.";
        return 0
    } else if (pChoice == "Rock" && cChoice == "Paper"){
        comScore++;
        roundOutcomeMesg = "Computer has won this round. Computer chose paper.";
    } else if (pChoice == "Rock" && cChoice == "Scissors"){
        playerScore++;
        roundOutcomeMesg = "Player has won this round. Computer chose Scissors.";
    } else if (pChoice == "Scissors" && cChoice == "Scissors"){
        roundOutcomeMesg = "This round was a draw.";
        return 0
    } else if (pChoice == "Scissors" && cChoice == "Rock"){
        comScore++;
        roundOutcomeMesg = "Computer has won this round. Computer chose Rock.";
    } else if (pChoice == "Scissors" & cChoice == "Paper"){
        playerScore++;
        roundOutcomeMesg = "Player has won this round. Computer chose Paper.";
    } else if (pChoice == "Paper" && cChoice == "Paper"){
        roundOutcomeMesg = "This round was a draw.";
        return 0
    } else if (pChoice == "Paper" && cChoice == "Scissors"){
        comScore++;
        roundOutcomeMesg = "Computer has won this round. Computer chose Scissors.";
    } else {
        playerScore++;
        roundOutcomeMesg = "Player has won this round. Computer chose Rock.";
    }
}

function updateUI(message, outcomeMesg = ""){
    pScore.textContent = `${playerScore}`;
    cScore.textContent = `${comScore}`;
    roundDisplay.textContent = `${round}`;
    info.textContent = message;
    roundOutcome.textContent = outcomeMesg;
}

rockIcon.addEventListener('click', () => {
    playerChoice = "Rock";
    message = "Your current choice is Rock";
    updateUI(message, roundOutcomeMesg);
});

paperIcon.addEventListener('click', () => {
    playerChoice = "Paper";
    message = "Your current choice is Paper";
    updateUI(message, roundOutcomeMesg);
});

scissorsIcon.addEventListener('click', () => {
    playerChoice = "Scissors";
    message = "Your current choice is Scissors";
    updateUI(message, roundOutcomeMesg);
});

playButton.addEventListener('click', () => {
    comChoice = getComputerChoice();
    if(playerChoice == ""){
        message = "You need to make a choice first.";
        updateUI(message, roundOutcomeMesg);
        return;
    }
    playRound(playerChoice, comChoice);
    round++;
    if(playerScore == 5){
        message = "Player has won!"
        playButton.classList.toggle('dontDisplay');
        resetButton.classList.toggle('dontDisplay');
    } else if(comScore == 5){
        message = "Computer has won!"
        playButton.classList.toggle('dontDisplay');
        resetButton.classList.toggle('dontDisplay');
    }
    updateUI(message, roundOutcomeMesg);
});

resetButton.addEventListener('click', () => {
   playerChoice = "";
   round = 0;
   playerScore = 0;
   comScore = 0; 
   message = "Welcome to rock paper scissors. Please make your first choice.";
   playButton.classList.toggle('dontDisplay');
   resetButton.classList.toggle('dontDisplay');
   updateUI(message, roundOutcomeMesg);
});

updateUI(message, roundOutcomeMesg);


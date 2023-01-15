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
        return 2
    } else if (pChoice == "Rock" && cChoice == "Scissors"){
        return 1
    } else if (pChoice == "Scissors" && cChoice == "Scissors"){
        return 0
    } else if (pChoice == "Scissors" && cChoice == "Rock"){
        return 2
    } else if (pChoice == "Scissors" & cChoice == "Paper"){
        return 1
    } else if (pChoice == "Paper" && cChoice == "Paper"){
        return 0
    } else if (pChoice == "Paper" && cChoice == "Scissors"){
        return 2
    } else {
        return 1
    }
}

function game(){
    let playerChoice
    let computerChoice
    let result
    let playerScore = 0
    for(i = 0; i < 5; i ++){
        alert(`Round: ${i + 1}`)
        playerChoice = prompt("Please select Rock, Paper or Scissors")
        computerChoice = getComputerChoice()
        alert(`Player Choice: ${playerChoice}. Computer Choice: ${computerChoice}.`)
        result = playRound(playerChoice, computerChoice)
        if(result == 1) playerScore ++
    }
    alert(`Hi player! You won ${playerScore} out of 5 times!`)
}

game()
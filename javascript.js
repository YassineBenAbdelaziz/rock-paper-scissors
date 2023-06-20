function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors']
    return choices[Math.floor(Math.random() * choices.length)];
}

function round(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == 'rock') {
        if (computerSelection == 'Rock') return 'Draw';
        else if (computerSelection == 'Paper') return 'You lose ! Paper beats Rock';
        else return 'You win ! Rock beats Scissors';
    }
    else if (playerSelection.toLowerCase() == 'paper') {
        if (computerSelection == 'Rock') return 'You win ! Paper beats Rock';
        else if (computerSelection == 'Paper') return 'Draw';
        else return 'You lose ! Scissors beats Paper';
    }
    else {
        if (computerSelection == 'Rock') return 'You lose ! Rock beats Scissors';
        else if (computerSelection == 'Paper') return 'You win ! Scissors beats Paper';
        else return 'Draw';
    }
}

let computer = 0, player = 0;
const playerH2 = document.querySelector("#player");
const computerH2 = document.querySelector("#computer");
const roundResult = document.querySelector("#roundResult");


function game(choice) {

    const result = round(choice, getComputerChoice());

    
    if (result == 'Draw') {
        computer++;
        player++;
    }
    else if (result.includes('You lose !'))
        computer++;
    else 
        player++;

    roundResult.textContent = result ;
    playerH2.textContent = `Player : ${player}`;
    computerH2.textContent = `Computer : ${computer}`;


    if (player==5 && computer == 5) {
        gameOver("Draw! Try again ");
    }
    else if (player == 5) {
        gameOver("You won !")
    }
    else if (computer ==5) {
        gameOver("You lose !")
    }
    else return ;

}


function gameOver(msg) {
    alert(msg);
    player = 0 ;
    computer = 0 ;
    playerH2.textContent = `Player : ${player}`;
    computerH2.textContent = `Computer : ${computer}`;
    roundResult.textContent = "" ;

}


function reset() {
    const window = confirm("Are you sure ?") ;
    if (window){
        player = 0 ;
        computer = 0 ;
        playerH2.textContent = `Player : ${player}`;
        computerH2.textContent = `Computer : ${computer}`;
        roundResult.textContent = "" ;
    }
}





const imgs = document.querySelectorAll("img");
imgs.forEach((img => img.addEventListener('click', (event) => game(event.target.id))))


const btn = document.querySelector("button") ;
btn.addEventListener('click', reset)
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
        else return 'You lose ! Scissors beats Paper' ;
    }
    else  {
        if (computerSelection == 'Rock') return 'You lose ! Rock beats Scissors';
        else if (computerSelection == 'Paper') return 'You win ! Scissors beats Paper';
        else return 'Draw' ;
    }
}
function game () {
    let choice ;
    let result, computer =0, player = 0 ;
    for (let i = 0 ; i < 5 ; i++) {
        choice = prompt("Write your choice : ")
        result = round(choice,getComputerChoice())
        console.log(result)
        if (result == 'Draw') {
            computer++;
            player++;
        }
        else if (result.includes('You lose !')) computer++ ;
        else player ++ ;
        console.log('Score P/C: ' + player + ' : ' +  computer);
    }
}

game()
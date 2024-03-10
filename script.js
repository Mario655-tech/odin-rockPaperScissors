function getComputerChoice() {
    play = Math.floor(Math.random() * 3);    
    return play;
    
}

function getPlayerChoice() {
    player = prompt("Your choice is?")
    
    if (player === "Rock") {  
        return 0;      
    }

    if  (player === "Paper") {  
        return 1;
    }

    if (player === "Scissors") { 
        return 2;
    }
        
}

function game() {

    let getComputer = getComputerChoice();
    let getPlayer = getPlayerChoice();
    
    if (getComputer === getPlayer) {
        console.log("Draw");
        return 0;
    }
    else if ((getPlayer === 0 && getComputer === 2) || 
             (getPlayer === 2 && getComputer === 1) || 
             (getPlayer === 1 && getComputer === 0)) {
        console.log("Player Won");
        return 1;
    }
    else {
        console.log("Computer Won");
        return 2;
    }
}



function playGame() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let current = game();

        if (current === 1) {
            playerScore += 1;
        }

        if (current === 2) {
            computerScore += 1;
        }
    }

    if (playerScore < computerScore) {
        console.log("Computer Wins.")
    }
    else if (computerScore < playerScore){
        console.log("Player Wins!")
    }
    else {
        console.log("It is a Draw.")
    }
    
    
}

playGame()

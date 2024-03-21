
const container = document.querySelector("#container")
const text = document.createElement("h1")
const score = document.createElement("h1")
const rock = document.createElement("button")
const paper = document.createElement("button")
const scissors = document.createElement("button")

rock.classList.add("btn")
paper.classList.add("btn")
scissors.classList.add("btn")

rock.setAttribute("id", "rock");
paper.setAttribute("id", "paper");
scissors.setAttribute("id", "scissors");


rock.textContent = "Rock"
paper.textContent = "Paper"
scissors.textContent = "Scissors"

let playerInput = 0
let computerInput = 0
let roundsPlayed = 0

rock.addEventListener("click", () => {
    playerInput = 0
    roundsPlayed++
    playGame(playerInput)
    checkWinner()
})

paper.addEventListener("click", () => {
    playerInput = 1
    roundsPlayed++
    playGame(playerInput)
    checkWinner()
})

scissors.addEventListener("click", () => {
    playerInput = 2
    roundsPlayed++
    playGame(playerInput)
    checkWinner()
})

function game(playerInput) {
    computerInput = Math.floor(Math.random() * 3)

    if (computerInput === playerInput) {
        console.log("Draw");
        text.textContent = "Draw"
        return 0;
    }
    else if ((playerInput === 0 && computerInput === 2) || 
             (playerInput === 2 && computerInput === 1) || 
             (playerInput === 1 && computerInput === 0)) {
        console.log("Player Won");
        text.textContent = "Player Won!"
        return 1;
    }
    else {
        console.log("Computer Won");
        text.textContent = "Computer Won!"
        return 2;
    }
   
 
}

let playerScore = 0
let computerScore = 0
let current = 0

function playGame (playerInput) {
    current = game(playerInput)

    
        if (current === 1) {
            playerScore += 1;
            score.textContent = "Player Score: " + playerScore + " Computer Score: " + computerScore
        } else if (current === 2) {
            computerScore += 1;   
            score.textContent = "Player Score: " + playerScore + " Computer Score: " + computerScore
        } else if (current === 0) {
            score.textContent = "Player Score: " + playerScore + " Computer Score: " + computerScore
        }
    


}

function checkWinner() {
    if (roundsPlayed === 5) {
        if (playerScore < computerScore) {
            console.log("Computer Wins.");
            text.textContent = "Computer Wins! Reload to play again."
            rock.disabled = true;
            paper.disabled = true;
            scissors.disabled = true;
        } else if (computerScore < playerScore) {
            console.log("Player Wins!");
            text.textContent = "Player Wins! Reload to play again."
            rock.disabled = true;
            paper.disabled = true;
            scissors.disabled = true;
        } else {
            console.log("It is a Draw.");
            text.textContent = "It is a Draw! Reload to play again."
            rock.disabled = true;
            paper.disabled = true;
            scissors.disabled = true;
        }
    }


}



container.appendChild(text)
container.appendChild(score)
container.appendChild(rock)
container.appendChild(paper)
container.appendChild(scissors)

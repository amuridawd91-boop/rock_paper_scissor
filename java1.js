const gameContainer = document.createElement('div');
gameContainer.id = 'game-container';
document.body.appendChild(gameContainer);


const buttonContainer = document.createElement('div');
buttonContainer.id = 'buttons';
gameContainer.appendChild(buttonContainer);
buttonContainer.style.display = "flex";
buttonContainer.style.gap =  "10px";

const rockButton = document.createElement('button');
rockButton.id = 'rock';
rockButton.textContent = 'Rock';
buttonContainer.appendChild(rockButton);

const paperButton = document.createElement('button');
paperButton.id = 'paper';
paperButton.textContent = 'Paper';
buttonContainer.appendChild(paperButton);

const scissorButton = document.createElement('button');
scissorButton.id = 'scissor';
scissorButton.textContent = 'Scissor';
buttonContainer.appendChild(scissorButton);

const playAgain = document.createElement("button");
playAgain.id = "play-again";
playAgain.textContent = "Play Again";
playAgain.style.display = "none";
buttonContainer.appendChild(playAgain);

const resultsContainer = document.createElement('div');
resultsContainer.id = 'results-container';
gameContainer.appendChild(resultsContainer);

const roundLog = document.createElement('p');
roundLog.id = 'round-log';
roundLog.textContent = 'Click a button to start the game!';
resultsContainer.appendChild(roundLog);

const scoreBoard = document.createElement('p');
scoreBoard.id = 'score-board';
scoreBoard.textContent = 'Human Score: 0 | Computer Score: 0';
resultsContainer.appendChild(scoreBoard);

const finalWinner = document.createElement('h2');
finalWinner.id = 'final-winner';
finalWinner.style.color = 'darkbrown';
resultsContainer.appendChild(finalWinner);
 
let humanScore = 0
let computerScore= 0 

function getComputerChoice(){
    let random = Math.floor(Math.random()*3);
    if (random === 0){
        return "rock";
    } else if (random === 1){
        return "paper";
    } else {
        return "scissor";
    }

}

// function getHumanChoice(){
//     let humanChoice = prompt("Enter rock, paper or scissor", "");
//     return humanChoice;
// }


function playRound(humanChoice, computerChoice){
if (humanScore === 5 || computerScore === 5) return;
humanChoice = humanChoice.toLowerCase();  

if (humanChoice === computerChoice) {
    roundLog.textContent = "It's a tie!";
} else if (humanChoice === "scissor" && computerChoice==="paper" || humanChoice==="rock" && computerChoice==="scissor" || humanChoice==="paper" && computerChoice==="rock"){
    roundLog.textContent = "You win! "+ humanChoice + " beats " + computerChoice + ".";    humanScore++;
} else {
    roundLog.textContent = "You lose! " + computerChoice + " beats " + humanChoice + ".";
    computerScore++;
}  
    ultimateWinner();
}

// function playGame(){
//     humanScore = 0;
//     computerScore = 0;
//     for (i=1;i<=5;i++){
//         console.log("Round " + i);
//     const humanSelection = getHumanChoice();
//     const computerSelection = getComputerChoice();
//         playRound(humanSelection, computerSelection)
//     console.log("Human Score;" + humanScore, "Computer Score; " + computerScore );
//     }
//     if (humanScore > computerScore){
//         console.log("Congratulations you won the game!!");
//     } else {
//         console.log("Sorry you lost the game.")
//     }
// }
// playGame()

function ultimateWinner() {
    scoreBoard.textContent = "Human Score: " + humanScore + "|  Computer Score: " + computerScore;
    if (humanScore == 5){
        finalWinner.textContent = "Congratulations you are the WINNER!"
        disableButtons();
        playAgain.style.display = "block";
    } else if (computerScore == 5){
        finalWinner.textContent = "Sorry you lost the game. Try Again!"
        disableButtons();
        playAgain.style.display = "block";
    }
}

function disableButtons(){
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorButton.disabled = true;
}

playAgain.addEventListener("click", () =>{
    humanScore = 0;
    computerScore = 0;
    roundLog.textContent = "Click a button to start the game!";
    scoreBoard.textContent = 'Human Score: 0 | Computer Score: 0';
    finalWinner.textContent = "";
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorButton.disabled = false;
    playAgain.style.display = "none";
})
rockButton.addEventListener("click", () => {
    playRound("rock", getComputerChoice())
});
paperButton.addEventListener("click", () => {
    playRound("paper", getComputerChoice())
});
scissorButton.addEventListener("click", () => {
    playRound("scissor", getComputerChoice())
});
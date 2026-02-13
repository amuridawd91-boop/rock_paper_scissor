
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

function getHumanChoice(){
    let humanChoice = prompt("Enter rock, paper or scissor", "");
    return humanChoice;
}

let humanScore = 0
 let computerScore= 0 


function playRound(humanChoice, computerChoice){
humanChoice = humanChoice.toLowerCase();  

if (humanChoice === computerChoice) {
    console.log("It's a tie.");
} else if (humanChoice === "scissor" && computerChoice==="paper" || humanChoice==="rock" && computerChoice==="scissor" || humanChoice==="paper" && computerChoice==="rock"){
    console.log("You win! "+ humanChoice + " beats " + computerChoice + ".");
    humanScore++;
} else {
    console.log("You lose! " + computerChoice + " beats " + humanChoice + ".");
    computerScore++;
}  

}


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


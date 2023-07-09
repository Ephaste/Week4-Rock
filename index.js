console.log("Hi");
const options =["rock", "paper", "scissor"];
function getComputerChoice(){
    console.log("Computer:");
    const choice= options[Math.floor(Math.random()*options.length)]; 
    console.log(choice);
}

function checkWinner(playerSelection, computerSelection){
    if(playerSelection==computerSelection){
        return "tie";
    }
    else if(
        (playerSelection =="rock") && (computerSelection == "scissor")||
        (playerSelection == "scissor") && (computerSelection == "paper")||
        (playerSelection =="paper") && (computerSelection == "rock")

    ){
        return "player";
    }
    else{
        return "computer"; 
    }
    }
    



function playRound(playerSelection, computerSelection){
const result= checkWinner(playerSelection, computerSelection);
if(result == "tie"){
    //return "Tie";
    return `It is a tie`
}
else if(result =="player"){
    //return "congrats";
    return `You Win! ${playerSelection} beats ${computerSelection}`
}
else {
return `You loose! ${computerSelection} beats ${playerSelection}`
//return "Fail!";
}
}

function getPlayerChoice(){
    let validatedInput = false;
    while(validatedInput== false){
        const choice =window.prompt(" choose among Rock Paper scissor");
        if(choice==null){
            continue;
        }
const choiceInLower = choice.toLowerCase();
if(options.includes(choiceInLower)){
    validatedInput = true;
    return choiceInLower;
}
    }
}


function game(){
    let scorePlayer =0;  
    let scoreComputer =0;
    console.log("welcome!");
    for(let i=0; i<5; i++){
        const playerSelection = getPlayerChoice();
        
           const computerSelection = getComputerChoice();
          console.log(playRound(playerSelection, computerSelection));
          console.log("==============");
    if(checkWinner((playerSelection, computerSelection) =="computer"))
        {
            scoreComputer++;
        }
        else if(checkWinner(playerSelection, computerSelection) =="player"){
            scorePlayer++;
        }
    }
    if(scorePlayer > scoreComputer){
        console.log("Player was the winner!")
    }
    else  if(scorePlayer < scoreComputer){
        console.log("Computer was the winner!")
    }else{
        console.log("We have a tie!")
    }
    console.log("Game Over!")
}
game();
 
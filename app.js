 const selections = ["rock", "paper", "scissors"];
 var computerChoice = getComputerChoice();
 let playerSelection = prompt("Choose paper, rock or scissors. ");
let computerVictory = console.log(computerChoice + " beats " + playerSelection + " ! I win! ");
let playerVictory = console.log(playerSelection + " beats " + computerChoice + "! You win!");
 
//  var computerVictory = alert(computerChoice + " beats " + playerSelection + " ! I win! ");
//  var playerVictory = alert(playerSelection + " beats " + computerChoice + "! You win!");

//returns a random item from computerChoice array
function getComputerChoice(){
    //  let computerChoice = ["Rock", "Paper", "Scissors"]
    //  for (let i=0; i<computerChoice.length; i++){
    //    console.log(computerChoice[i]);
    //  }
    return selections[Math.floor(Math.random()*selections.length)];
    console.log(computerChoice);

 }

//  console.log(playerSelection);

function playRound()

{
    
    

  if(playerSelection == computerChoice){
    console.log("Sorry! There has been a mistake. Please try again.")
}
  else if(playerSelection == "rock" && computerChoice == "paper") {
    computerVictory;
} else if (playerSelection == "paper" && computerChoice == "scissors"){
    computerVictory;
} else if(playerSelection == "scissors" && computerChoice == "rock"){
    computerVictory;
} else {
    playerVictory;
}

}

playRound();
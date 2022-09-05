 const selections = ["rock", "paper", "scissors"];
 var computerChoice = getComputerChoice();
 var playerScore = 0;
 var computerScore = 0;
 var roundsPlayed = 0;

function getComputerChoice(){
    
    return selections[Math.floor(Math.random()*selections.length)];
   

 }
 console.log(computerChoice);
 

function playRound()

{
  var playerSelection = prompt("Choose paper, rock or scissors. ");

  if(playerSelection === computerChoice){
    console.log("Tie! No winner!");
}
  else if(playerSelection === "rock" && computerChoice === "paper" || playerSelection === "paper" && computerChoice === "scissors" || playerSelection === "scissors" && computerChoice === "rock") {
    computerScore += 1;
    
    console.log("computer Victory");
} else {
    playerScore += 1;
    console.log ("playerVictory");
}

 roundsPlayed += 1;
 console.log(playerSelection);
 console.log(roundsPlayed);
 console.log( "Computer: " + computerScore);
 console.log( "Player: " + playerScore);
  
 }
 

while(roundsPlayed < 5){playRound();}
 

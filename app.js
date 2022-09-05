 const selections = ["rock", "paper", "scissors"];
 var computerChoice = getComputerChoice();
 
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
   console.log("computer Victory");
} else {
    console.log ("playerVictory");
}

 roundsPlayed += 1;
 console.log(playerSelection);
 console.log(roundsPlayed);
  
 }
 

while(roundsPlayed < 5){playRound();}
 

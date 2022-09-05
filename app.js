 const selections = ["rock", "paper", "scissors"];
 const playBtn = document.querySelector("#play-round");
//  var computerChoice = getComputerChoice();
 var playerScore = 0;
 var computerScore = 0;
 var roundsPlayed = 0;


 //
function getComputerChoice(){
    
    return selections[Math.floor(Math.random()*selections.length)];
    

 }
 
 

function playRound()

{
  var playerSelection = prompt("Choose paper, rock or scissors. ");
  var computerChoice = getComputerChoice();

  if(playerSelection === computerChoice){
    console.log("Tie! No winner!");
}
  else if(playerSelection === "rock" && computerChoice === "paper" || playerSelection === "paper" && computerChoice === "scissors" || playerSelection === "scissors" && computerChoice === "rock") {
    computerScore += 1;
    roundsPlayed += 1;
    console.log("computer Victory");
} else {
    playerScore += 1;
    roundsPlayed += 1;
    console.log ("playerVictory");
}

//  roundsPlayed += 1;
//  getComputerChoice();
 console.log(playerSelection);
 console.log(computerChoice);
 console.log(roundsPlayed);
 console.log( "Computer: " + computerScore);
 console.log( "Player: " + playerScore);
  
 }
 
playBtn.addEventListener('click', () => {
  while(roundsPlayed < 5){
   
    playRound();}
})

 

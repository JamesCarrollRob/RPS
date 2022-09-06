 const selections = ["rock", "paper", "scissors"];
 const choiceBtns = document.querySelectorAll("#choiceBtn");
 const playerScoreDisplay = document.getElementById('player-score');
 const computerScoreDisplay = document.getElementById('computer-score');
 const roundDisplay = document.getElementById('round');
 const tieDisplay = document.getElementById('tie');
 var playerScore = 0;
 var computerScore = 0;
 var roundsPlayed = 0;
 var tie = 0;
 var playerSelection;
 var computerChoice;


 //
function getComputerChoice(){
    
    return selections[Math.floor(Math.random()*selections.length)];
    

 }

 choiceBtns.forEach(button=>button.addEventListener("click", ()=> {
      playerSelection = button.textContent;
      computerChoice = getComputerChoice();
      playRound();
 }))
 
 

function playRound()

{
  

  if(playerSelection === computerChoice){
    tie += 1;
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

 console.log(playerSelection);
 console.log(computerChoice);
 console.log(roundsPlayed);
 console.log( "Computer: " + computerScore);
 console.log( "Player: " + playerScore);

 playerScoreDisplay.innerText = "Player: " + playerScore;
 computerScoreDisplay.innerText = "Computer: " + computerScore;
 roundDisplay.innerText = "Round: " + roundsPlayed;
 tieDisplay.innerText = "Tie: " + tie;
  
 }
 

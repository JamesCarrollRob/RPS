 const selections = ["rock", "paper", "scissors"];
 const playBtn = document.querySelector("#play-round");
//  const rockBtn = document.querySelector("#rock");
//  const paperBtn = document.querySelector("#paper");
//  const scissorsBtn = document.querySelector("#scissors");
 const choiceBtns = document.querySelectorAll("#choiceBtn");
 var playerScore = 0;
 var computerScore = 0;
 var roundsPlayed = 0;
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
  // var playerSelection = prompt("Choose paper, rock or scissors. ");
  // var playerSelection = ""
  // choiceBtns.forEach(button=>button.addEventListener("click", ()=> {
  //         playerSelection = button.textContent;
  //         computerChoice = getComputerChoice();
  //    }))
  // var computerChoice = getComputerChoice();

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
  playRound();
  // while(roundsPlayed < 5){
   
  //   playRound();}
})


// rockBtn.addEventListener('click', () => {
//   playerSelection = "rock";
// })

// paperBtn.addEventListener('click', () => {
//   playerSelection = "paper";
// })

// scissorsBtn.addEventListener('click', () => {
//   playerSelection = "scissors";
// })
 

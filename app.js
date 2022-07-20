 const selections = ["rock", "paper", "scissors"];
 var computerChoice = getComputerChoice();
 var playerSelection = prompt("Choose paper, rock or scissors. ");
// var computerVictory = console.log(computerChoice + " beats " + playerSelection + " ! I win! ");
// var playerVictory = console.log(playerSelection + " beats " + computerChoice + "! You win!");
 
//  var computerVictory = alert(computerChoice + " beats " + playerSelection + " ! I win! ");
//  var playerVictory = alert(playerSelection + " beats " + computerChoice + "! You win!");

//returns a random item from computerChoice array
function getComputerChoice(){
    //  let computerChoice = ["Rock", "Paper", "Scissors"]
    //  for (let i=0; i<computerChoice.length; i++){
    //    console.log(computerChoice[i]);
    //  }
    return selections[Math.floor(Math.random()*selections.length)];
   

 }
 console.log(computerChoice);
 console.log(playerSelection);

function playRound()

{
//     var computerVictory = console.log(computerChoice + " beats " + playerSelection + " ! I win! ");
// var playerVictory = console.log(playerSelection + " beats " + computerChoice + "! You win!");
    

  if(playerSelection === computerChoice){
    console.log("Tie! No winner!");
}
  else if(playerSelection === "rock" && computerChoice === "paper" || playerSelection === "paper" && computerChoice === "scissors" || playerSelection === "scissors" && computerChoice === "rock") {
   console.log("computer Victory");
} else {
    console.log ("playerVictory");
}

}

 playRound();

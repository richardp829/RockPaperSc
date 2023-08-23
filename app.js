let result = "";
const results = document.querySelector('.results');
let playerScore = 0;
let computerScore = 0;
const selections = document.createElement("p");
const score = document.createElement("p");
selections.textContent = '';
const winner = document.createElement("p");


results.appendChild(selections);
results.appendChild(score);
results.appendChild(winner);

function playerSelection (selection) {
    const resultado = document.createElement("p");
    console.log(selection.target.id);
    
    resultado.textContent = `You chose ${selection.target.id} `;
    // results.appendChild(resultado);
    selections.textContent = `you chose ${selection.target.id}, computer chose `;
    return selection.target.id;
}

function getComputerChoice () {
    let randomChoice = Math.floor(Math.random()*3);
    let choice = "";
    const resultado = document.createElement("p");
    if (randomChoice === 0) {
        choice = "paper"
    }
    else if (randomChoice === 1 ) {
        choice = "rock"
    }
    else {
        choice = "scissors"
    }

    resultado.textContent = `computer chose ${choice} `;
    // results.appendChild(resultado);
    console.log(choice)
    selections.textContent += `${choice}`;
    return choice;
}

function playMatch (user,computer) {

    const resultado = document.createElement("p");
    
        if(user === computer)                              { winner.textContent = "it is a tie";  result = "tie"}
    else if( user === "paper" && computer === "rock" )      { winner.textContent = "user wins the round";   result = "user";}
    else if( user === "scissors" && computer === "paper" )  { winner.textContent = "user wins the round";   result = "user";}
    else if( user === "rock" && computer === "scissors" )   { winner.textContent = "user wins the round";   result = "user";}
    else {winner.textContent = "computer wins the round";  result = "computer";}
    
    
    
    results.appendChild(resultado);
    return result;
    
    };




const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click" , function (event) {  
    if ( (playMatch(playerSelection(event) , getComputerChoice())) === "user" ) {  
        playerScore++     
    }   
else { computerScore++ }
console.log( `user: ${playerScore} computer: ${computerScore}}`)
score.textContent = `user: ${playerScore} computer: ${computerScore}`;
if ( playerScore === 5) { gameReset('player') }
else if ( computerScore === 5) { gameReset('computer') }
})

paper.addEventListener("click" , function (event) {  
    if ( (playMatch(playerSelection(event) , getComputerChoice())) === "user" ) {  
        playerScore++     
    }   
else { computerScore++ }
console.log( `user: ${playerScore} computer: ${computerScore}}`)
score.textContent = `user: ${playerScore} computer: ${computerScore}`;
if ( playerScore === 5) { gameReset('player') }
else if ( computerScore === 5) { gameReset('computer') }
})

scissors.addEventListener("click" , function (event) {  

if ( (playMatch(playerSelection(event) , getComputerChoice())) === "user" ) {  
        playerScore++     
    }   
else { computerScore++ }
console.log( `user: ${playerScore} computer: ${computerScore}}`)
score.textContent = `user: ${playerScore} computer: ${computerScore}`;
if ( playerScore === 5) { gameReset('player') }
else if ( computerScore === 5) { gameReset('computer') }
})

function gameReset (winner) { 
    score.textContent = `${winner} won the game!`
    playerScore = 0; computerScore = 0;
}

// paper.addEventListener("click" , function (event) { playMatch(playerSelection(event) , getComputerChoice())} )
// scissors.addEventListener("click" , function (event) { playMatch(playerSelection(event) , getComputerChoice())} )



















// function playerSelection () {
//     let choice = prompt("Make a selection among rock, paper and scissors").toLowerCase();
//     console.log(choice);
//     return choice;
// }





// function playMatch (user,computer) {

//          if(user === computer)                              { console.log("it is a tie"); return result = "tie"}
//     else if( user === "paper" && computer === "rock" )      { console.log("user wins"); return  result = "user";}
//     else if( user === "scissors" && computer === "paper" )  { console.log("user wins"); return  result = "user";}
//     else if( user === "rock" && computer === "scissors" )   { console.log("user wins"); return  result = "user";}
//     else {console.log("computer wins"); return result = "computer";}
// };


// function game () {
//     let playerScore = 0;
//     let computerScore = 0;

//     for (i=0 ; i<5 ; i++) {
//         playMatch(playerSelection(),getComputerChoice())

//         if (result === "user") { playerScore++ }
//         else if (result === "computer") { computerScore++ };


//     }

//     console.log(playerScore);
//     console.log(computerScore);
//     if(playerScore === computerScore) { console.log("it was a tie") }
//     else if(playerScore > computerScore) { console.log("player won") }
//     else { console.log("Computer won") } 

    
// };
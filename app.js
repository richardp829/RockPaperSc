let result = "";

function playerSelection () {
    let choice = prompt("Make a selection among rock, paper and scissors").toLowerCase();
    console.log(choice);
    return choice;
}

function getComputerChoice () {
    let randomChoice = Math.floor(Math.random()*3);
    let choice = "";
    if (randomChoice === 0) {
        choice = "paper"
    }
    else if (randomChoice === 1 ) {
        choice = "rock"
    }
    else {
        choice = "scissors"
    }

    console.log(choice);
    return choice;
}

function playMatch (user,computer) {

         if(user === computer)                              { console.log("it is a tie"); return result = "tie"}
    else if( user === "paper" && computer === "rock" )      { console.log("user wins"); return  result = "user";}
    else if( user === "scissors" && computer === "paper" )  { console.log("user wins"); return  result = "user";}
    else if( user === "rock" && computer === "scissors" )   { console.log("user wins"); return  result = "user";}
    else {console.log("computer wins"); return result = "computer";}
};


function game () {
    let playerScore = 0;
    let computerScore = 0;

    for (i=0 ; i<5 ; i++) {
        playMatch(playerSelection(),getComputerChoice())

        if (result === "user") { playerScore++ }
        else if (result === "computer") { computerScore++ };


    }

    console.log(playerScore);
    console.log(computerScore);
    if(playerScore === computerScore) { console.log("it was a tie") }
    else if(playerScore > computerScore) { console.log("player won") }
    else { console.log("Computer won") } 

    
};



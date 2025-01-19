
let rpsArray=["rock", "paper", "scissors"];

let humanScore=0;
let computerScore=0;

function getComputerChoice(){
    let rpsRandGen=Math.floor(Math.random()*3);
    return rpsArray[rpsRandGen];
}

function getHumanChoice(){
    let userChoice;
    do{
        userChoice=window.prompt("Enter your choice: rock or paper or scissors").toLowerCase();
    } while (!rpsArray.includes(userChoice));
    return userChoice;
}


function playRound(userChoice, computerChoice){

    console.log(`You chose: ${userChoice}`);
    console.log(`Computer chose: ${computerChoice}`);

    if (userChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        console.log(`you win this time and your current score is ${humanScore}`);

    } else {
        computerScore++;
        console.log(`You lose! this time and your opponent score is ${computerScore}`);
    }
}

function playGame(){
    for (let i=0; i<5; ++i)
    {
        playRound(getHumanChoice(), getComputerChoice());
    }
    console.log(`your score is ${humanScore} and computer score is ${computerScore}`);
    if(humanScore> computerScore) console.log("YOU WIN!");
    else if(humanScore< computerScore) console.log("YOU LOSE!");
    else console.log("YOU TIED@#")
}

playGame();
const buttons=document.querySelectorAll('#rps_list button');
const resultDiv=document.getElementById('result');
const yourScore=document.getElementById('userScore');
const compScore=document.getElementById('computerScore');
const quickScore=document.getElementById('quickScore');
const rpsArray=["rock", "paper", "scissors"];
console.log(buttons)

let humanScore=0;
let computerScore=0;
const MAX_SCORE=5;


function getComputerChoice(){

    return rpsArray[Math.floor(Math.random()*rpsArray.length)];
}

// function getHumanChoice(){
//     let userChoice;
//     do{
//         userChoice=window.prompt("Enter your choice: rock or paper or scissors").toLowerCase();
//     } while (!rpsArray.includes(userChoice));
//     return userChoice;
// }


function playRound(userChoice, computerChoice){

    console.log(`You chose: ${userChoice}`);
    console.log(`Computer chose: ${computerChoice}`);

    if (userChoice === computerChoice) {
        console.log("It's a tie!");
        quickScore.textContent=`Your Choice : ${userChoice}
                                Computer Choice : ${computerChoice}
                                result Draw`
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
       
        quickScore.textContent=`Your Choice : ${userChoice}
                                Computer Choice : ${computerChoice}
                                result You Win`

    } else {
        computerScore++;
        
        quickScore.textContent=`Your Choice : ${userChoice}
                                Computer Choice : ${computerChoice}
                                result You Lose`
    }
    resultUpdate();
}

function resultUpdate(){
    yourScore.textContent= `Your score is : ${humanScore}`;
    compScore.textContent = `Computer score is : ${computerScore}`;
    if(humanScore === MAX_SCORE || computerScore === MAX_SCORE)
    {
        if(humanScore> computerScore)
        {
            resultDiv.textContent=`your score is ${humanScore} 
                        and computer score is ${computerScore}
                        Congratulations! You Win!`
        }
        else {
            resultDiv.textContent=`your score is ${humanScore} 
                        and computer score is ${computerScore}
                        Oops! You Lost! Try Again`
        }
         humanScore=0;
         computerScore=0;

    }
    else resultDiv.textContent='';
}

// function result(){
//     console.log(`your score is ${humanScore} and computer score is ${computerScore}`);
//     if(humanScore> computerScore) console.log("YOU WIN!");
//     else console.log("YOU LOSE!");

// }


buttons.forEach(button=>{
    button.addEventListener('click', ()=>{
        const userChoice=button.textContent.toLowerCase();
        const computerChoice=getComputerChoice();
        // playRound(item.innerText, getComputerChoice());
        console.log(userChoice);
        playRound(userChoice, computerChoice);
    });
});



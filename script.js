
// Some Predefined Variables
let userScore = 0;
let comuterScore = 0;
let randomNumber =0;
const arr=["rock","paper","scissors"];
let ComputerRandomChoice="";
let userChoice = "";
let choices = document.querySelectorAll(".images");
let msg = document.querySelector("#msg");
let msgDiv = document.querySelector(".msg-div");
let color="";

let userScoreCard = document.querySelector("#user-scores");
let comScoreCard = document.querySelector("#com-scores");

console.log(msgDiv);


// Function to generate Random Number and according to that choosing computer's choice
function generateRandomNumber(){
    randomNumber = Math.floor(Math.random()*3);
    console.log(randomNumber);
    ComputerRandomChoice = arr[randomNumber];
}
 

// Logic to Find Who WON the GAME
let finalAnswer = "";
let winnerValue = true;
function winner(userChoice,ComputerRandomChoice){
    if(userChoice===ComputerRandomChoice){
         finalAnswer = `You Both Chose ${userChoice}. And That is a DRAW!!!`;
         winnerValue=false;
    }
    else if(userChoice==="paper"){
        if(ComputerRandomChoice==="rock"){
            finalAnswer = `Your ${userChoice} beats ${ComputerRandomChoice}`;
            userScore++;
            color="green";
            winnerValue=true;
            
        }
        else{
            finalAnswer=`Computer's ${ComputerRandomChoice} beats Your ${userChoice}`;
            comuterScore++;
            winnerValue=false;
        } 
    }
    else if(userChoice==="rock"){
        if(ComputerRandomChoice==="paper"){
            finalAnswer=`Computer's ${ComputerRandomChoice} beats your ${userChoice}`;
            comuterScore++;
            winnerValue=false;
        }
        else{
            finalAnswer=`Your ${userChoice} beats Computer's ${ComputerRandomChoice}`;
            userScore++;
            winnerValue=true;
        }
    }
    else if(userChoice==="scissors"){
        if(ComputerRandomChoice==="paper"){
            finalAnswer=`Your ${userChoice} beats Computer's ${ComputerRandomChoice}`;
            userScore++;
            winnerValue=true;
        }
        else{
            finalAnswer=`Computer's ${ComputerRandomChoice} beats Your ${userChoice}`;
            comuterScore++;
            winnerValue=false;
        }
    }
}


// Adding Event Listners to the images and performing actions
for(let i=0;i<choices.length;i++){
    choices[i].addEventListener("click",()=>{
         userChoice = choices[i].getAttribute("id");
        generateRandomNumber();
         winner(userChoice,ComputerRandomChoice);
         msg.innerText=finalAnswer;
         userScoreCard.innerText=userScore;
         comScoreCard.innerText=comuterScore;
         if(winnerValue){
            msgDiv.classList.add("winner");
         }
         else{
            msgDiv.classList.remove("winner")
         }
         
    })
}






const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoice = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoice.forEach(possibleChoice => possibleChoice.addEventListener('click', (e)=>{
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateCompChoice()
    whowin()
} ))

//small function to decide which decision computer will make
function generateCompChoice(){
    const randNum = Math.floor(Math.random() * possibleChoice.length) +1
   
   if(randNum === 1){
    computerChoice = 'rock'
   }
   if(randNum === 2){
    computerChoice = 'paper'
   }
   if(randNum === 3){
    computerChoice = 'scissors'
   }
   computerChoiceDisplay.innerHTML=computerChoice
}

function whowin(){
    if (computerChoice === userChoice){
        result = 'Draw :p'
    }
    if (computerChoice === 'rock' && userChoice === "paper"){
        result = 'Congratulation you are winner'
    }
    if (computerChoice === 'rock' && userChoice === "scissor"){
        result = 'Unfortunetely, you lost!'
    }
    if (computerChoice === 'paper' && userChoice === "scissors"){
        result = 'Congratulation you are winner'
    }
    if (computerChoice === 'paper' && userChoice === "rock"){
        result = 'Unfortunetely, you lost!'
    }
    if (computerChoice === 'scissors' && userChoice === "rock"){
        result = 'Congratulation you are winner'
    }
    if (computerChoice === 'scissors' && userChoice === "paper"){
        result = 'Unfortunetely, you lost!'
    }
    resultDisplay.innerHTML = result
}
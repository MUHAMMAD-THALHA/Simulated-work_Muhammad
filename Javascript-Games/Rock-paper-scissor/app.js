const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = userChoice
  generateComputerChoice()
  getResult()
}))

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1 // or you can use possibleChoices.length
  
  if (randomNumber === 1) {
    computerChoice = 'Rock'
  }
  if (randomNumber === 2) {
    computerChoice = 'Paper'
  }
  if (randomNumber === 3) {
    computerChoice = 'Scissor'
  }
  computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
  if (computerChoice === userChoice) {
    result = 'its a draw!😐'
  }
  if (computerChoice === 'Rock' && userChoice === "Paper") {
    result = 'you win!😁'
  }
  if (computerChoice === 'Rock' && userChoice === "Scissor") {
    result = 'you lost!🥺'
  }
  if (computerChoice === 'Paper' && userChoice === "Scissor") {
    result = 'you win!😁'
  }
  if (computerChoice === 'Paper' && userChoice === "Rock") {
    result = 'you lose!😞'
  }
  if (computerChoice === 'Scissor' && userChoice === "Rock") {
    result = 'you win!😁'
  }
  if (computerChoice === 'Scissor' && userChoice === "Paper") {
    result = 'you lose!🥺'
  }
  resultDisplay.innerHTML = result
}
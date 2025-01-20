// Updated codes :// 
 // ----------------------------- //
// Select DOM elements
const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');

// Score variables
let playerScore = 0;
let computerScore = 0;

// Create and display score elements
const playerScoreDisplay = document.createElement('h2');
const computerScoreDisplay = document.createElement('h2');

document.body.insertBefore(playerScoreDisplay, document.body.children[3]);
document.body.insertBefore(computerScoreDisplay, document.body.children[4]);

playerScoreDisplay.innerHTML = `My Score: ${playerScore}`;
computerScoreDisplay.innerHTML = `Computer's Score: ${computerScore}`;

// Variables for user and computer choices
let userChoice;
let computerChoice;
let result;

// Event listener for button clicks
possibleChoices.forEach(possibleChoice =>
  possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
  })
);

// Generate computer choice
function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  const choices = ['Rock', 'Paper', 'Scissor'];
  computerChoice = choices[randomNumber];
  computerChoiceDisplay.innerHTML = computerChoice;
}

// Get the result and update scores
function getResult() {
  // Reset button highlights
  resetButtonStyles();

  // Determine the winner
  if (computerChoice === userChoice) {
    result = "It's a draw! 😐";
  } else if (
    (computerChoice === 'Rock' && userChoice === 'Paper') ||
    (computerChoice === 'Paper' && userChoice === 'Scissor') ||
    (computerChoice === 'Scissor' && userChoice === 'Rock')
  ) {
    result = 'You win! 😁';
    playerScore++;
    document.getElementById(userChoice).classList.add('highlight-green');
  } else {
    result = 'You lose! 🥺';
    computerScore++;
    document.getElementById(computerChoice).classList.add('highlight-red');
  }

  // Update the results and scores
  resultDisplay.innerHTML = result;
  playerScoreDisplay.classList.add('player-score');
  computerScoreDisplay.classList.add('computer-score');
  playerScoreDisplay.innerHTML = `My Score: ${playerScore}`;
  computerScoreDisplay.innerHTML = `Computer's Score: ${computerScore}`;
}

// Reset button styles after a short delay
function resetButtonStyles() {
  possibleChoices.forEach(button => {
    button.classList.remove('highlight-green', 'highlight-red');
  });
}

// Add a reset button
const resetButton = document.createElement('button');
resetButton.textContent = 'Reset';
document.body.appendChild(resetButton);

resetButton.addEventListener('click', () => {
  playerScore = 0;
  computerScore = 0;
  playerScoreDisplay.innerHTML = `My Score: ${playerScore}`;
  computerScoreDisplay.innerHTML = `Computer's Score: ${computerScore}`;
  resultDisplay.innerHTML = '';
  userChoiceDisplay.innerHTML = '';
  computerChoiceDisplay.innerHTML = '';
  resetButtonStyles();
});

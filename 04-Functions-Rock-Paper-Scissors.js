
// user choice
const getUserChoice =userInput => {
  
  userInput = userInput.toLowerCase();
  
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log('Error!');
  }
};

// computer choice
const getComputerChoice =() => {
  
  // random number
  let randomNumber = Math.floor(Math.random() *3);

  // switch between options
  switch (randomNumber) {
  case 0:
    return 'rock';
  case 1:
    return 'paper';
  case 2:
    return 'scissors';
  }
}


// define a winner
function determineWinner (userChoice, computerChoice){

  if (userChoice ===computerChoice) { 
    return 'The game was a tie!'; 

  } else if(userChoice === 'bomb'){
    return 'User won with a BOMB :)'; 

  } else {

    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'The computer won!';
      } else {
        return 'You won!';
      }
    }

    if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'The computer won!';
      } else {
        return 'You won!';
      }
    }

    if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'The computer won!';
      } else {
        return 'You won!';
      }
    }
  }
}

// START SCRIPT

// set user input
// @options: Rock, Scissors, Paper and BOMB
let userInput ='Rock'; 

// processing
let userChoice =getUserChoice(userInput);
let computerChoice =getComputerChoice();

// display result
console.log('user choice: ' + userChoice);
console.log('comp choice: ' + computerChoice);
console.log('WINNER: ' + determineWinner (userChoice, computerChoice));

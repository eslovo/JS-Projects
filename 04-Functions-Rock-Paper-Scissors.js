// user choice
const getUserChoice =userInput => {
  
  userInput = userInput.toLowerCase();
  
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
  } else {
    console.log('Error!');
  }
};

// computer choice
const getComputerChoice =() =>{
  
  // random number
  let randNumber = Math.floor(Math.random() * 3);

  // switch between options
  switch (randomNumber) {
  case 0:
    return 'rock';
  case 1:
    return 'paper';
  case 3:
    return 'scissors';
  }
}

// define a winner
function determineWinner (){

}

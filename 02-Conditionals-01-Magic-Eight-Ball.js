// Magic Eight Ball Project

// Define userName
let userName ='';


// Display greating
userName ==='Jane' ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

console.log('Do you want to ask a Magic Eight Ball?'); 
console.log('');

// Define userQuestion
let userQuestion ='';

// Random number between 0 and 7
randomNumber =Math.floor(Math.random() * 11);

switch (randomNumber) {

  case 0:
  userQuestion ='What does the Unuverse want me to know right now?';
  break;

  case 1:
  userQuestion ='What changes I should be prepared of?';
  break;

  case 2:
  userQuestion ='Is there a power that want my failure?';
  break;

  case 3:
  userQuestion ='What do I need to do to live a more purposeful and happy live?';
  break;

  case 4:
  userQuestion ='What work path or career am I most suited to?';
  break;

  case 5:
  userQuestion ='How can I be more successfull in my job, my realations and live in general?';
  break;

  case 6:
  userQuestion ='How can I attract love into my live?';
  break;

  case 7:
  userQuestion ='What is the future of my current love relation?';
  break;

  case 8:
  userQuestion ='How can I heal my relation?';
  break;

  case 9:
  userQuestion ='Is ther anyone who had crossed over who wants to communicate with me?';
  break;

  case 10:
  userQuestion ='Is there anything my deceased loved one/s wants me to know?';
  break;

}

console.log(userQuestion);
console.log('');

// Random number between 0 and 7
randomNumber =Math.floor(Math.random() * 8);

// Checking random number
//console.log(randomNumber);

// Define eightBall answer based on random number
let eightBall ='';

switch (randomNumber) {

  case 0:
  eightBall ='It is certain';
  break;

  case 1:
  eightBall ='It is decidedly so';
  break;

  case 2:
  eightBall ='Reply hazy try again';
  break;

  case 3:
  eightBall ='Cannot predict now';
  break;

  case 4:
  eightBall ='Do not count on it';
  break;

  case 5:
  eightBall ='My sources say no';
  break;

  case 6:
  eightBall ='Outlook not so good';
  break;

  case 7:
  eightBall ='Signs point to yes';
  break;

}

// Magic Eight Ball answer
console.log(eightBall);

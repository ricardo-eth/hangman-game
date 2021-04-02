const readlineSync = require('readline-sync')

// import random word function
const { randomWord } = require('./randomWord')

// loop 
let running = true;

while (running) {

  if (readlineSync.keyInYNStrict('continue? ')){
	   console.log(randomWord)
  }
  else {
      console.log('goodbye!')
      running = false;
  }
}
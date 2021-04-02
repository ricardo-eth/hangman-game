const readlineSync = require('readline-sync');

// import random word function
const { randomWord } = require('./randomWord')


const secretWord = randomWord;
console.log(`mot a trouver : ${randomWord}`)


// decomposer le mot
const letterNumber = secretWord.length
console.log(letterNumber)


// show line length
const showLine = (nb) => {
    return '_'.repeat(nb)
}

const line = showLine(letterNumber)

// word split Array
const lettersArray = randomWord.split('')
console.log(lettersArray)

// letter index position v1
const letterIndex = (word) => {
    for(var i = 0; i < word.length; i++) {
    console.log("Lettre " + word[i] + " : position " + i);
  }
}

console.log(letterIndex(randomWord))

// draw the letter space hide
  let letterSpace = `${showLine(letterNumber)}`
 
// get line on Array
  let letterSpaceArray = letterSpace.split('')
  console.log(letterSpaceArray)


// ------------- while --------
let running = true;

while (running) {
  
  let lt = readlineSync.question('lt = ? :  ');

  // include letter verification
  ltTest = lettersArray.includes(lt)
  
  if (ltTest == false) {
	    console.log('C\'est pas la bonne lettre');
  }
  else if (ltTest == true) {
    console.log('Tu es dans le bon chemin garçon')
   
    const newArr = letterSpaceArray
    const i = randomWord.indexOf(lt)
    newArr[i] = lt
    console.log(newArr)
  }
  
    //  console.log('Bravo!');
     // running = false;

}
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
  const strRandomWord = randomWord;


  // letter index position v2
  const letterIndexV2 = (str, x) => {
      for(var i = 0; i < str.length; i++) {
        if (str.charAt(i) == x) {
          index = i;
        } 
      return index;
    }
  }


  
  let lt = readlineSync.question('lt = ? :  ');

  let indexLetter = letterIndexV2(strRandomWord, lt)

  // include letter verification
  ltTest = lettersArray.includes(lt)
  
  if (ltTest == false) {
	    console.log('C\'est pas la bonne lettre');
  }
  else if (ltTest == true) {
    console.log('Tu es dans le bon chemin garçon')
    
    // overide letter space array "_ _ _ _"
    const newArr = letterSpaceArray
    const i = 2
    newArr[i] = inputUserLetter
    console.log(newArr)
  }
  
    //  console.log('Bravo!');
     // running = false;

}
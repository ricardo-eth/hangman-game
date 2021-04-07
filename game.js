const fs = require('fs')
const readline = require('readline-sync')
const chalk = require('chalk');
const GameError = require('./gameError')

const { 
  welcome, 
  lastLive, 
  goodWay, 
  badWay, 
  gameOver, 
  youWin} = require('./message')

// import random word function
const { randomWord } = require('./randomWord')

const { hangmanPics } = require('./hangmanPics')

const DICT_FILE_ERROR = { code: 'DICT_FILE_ERROR', errno: 1 }

class Game {
  init(DICT_PATH) {
    try {
      const dictContent = fs.readFileSync(DICT_PATH)
    } catch (e) {
      throw new GameError(e.message, DICT_FILE_ERROR)
    }
  }
  run() {
    while (true) {
      // initialisation 
      let wordHide = randomWord

      let wordToFind = []

      for (let i = 0; i < wordHide.length; i++) {
        wordToFind.push('_')
      }

      // import welcome message
      welcome()
      //---------
      let lifeCount = 7
      let hangmanPicsFrame = 0
      
      while (lifeCount && wordToFind.includes('_')) {
        let letter = ''

        console.log(`Nombre de vie : ${lifeCount} \n ${hangmanPicsFrame == 6 ? chalk.red(hangmanPics[hangmanPicsFrame]) : hangmanPics[hangmanPicsFrame]}`)

        console.log(chalk.blue('==================================================='))

        if (lifeCount < 2){
          // import lastLife message
          lastLife()
        }

        console.log(`Le mot : ${wordToFind.join(' ')}`)
        console.log(chalk.blue('==================================================='))
        letter = readline.question('La lettre : ').toLowerCase()

        for (let i = 0; i < wordHide.length; i++) {
          wordHide[i] === letter ? wordToFind[i] = letter : '' 
        }

        if (wordHide.includes(letter)) {
          // import goodWay message
          goodWay()
        } else {
          lifeCount--
          hangmanPicsFrame++
          // import badWay message
          badWay()
        }
      }
      if (lifeCount === 0) {
        // import gameOver message
        gameOver(wordHide)

        let choice = readline.question('Voulez-vous rejouer ?\nYes [y]\nNo [n]\nVotre choix : ')
        choice === 'y' ? '' : process.exit(1)
      } else {
        // import youWin message
        youWin(wordHide)

        let choice = readline.question('Voulez-vous rejouer ?\nYes [y]\nNo [n]\nVotre choix : ')
        choice === 'y' ? '' : process.exit(1)
      }
    }
  }
}

module.exports = Game;
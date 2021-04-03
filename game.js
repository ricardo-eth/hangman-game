const fs = require('fs')
const readline = require('readline-sync')
const chalk = require('chalk');

// import random word function
const { randomWord } = require('./randomWord')

const { hangmanPics } = require('./hangmanPics')

// ------------- while program --------
let running = true;

while (running) {
  // initialisation 
  let wordHide = randomWord

  let wordToFind = []

  for (let i = 0; i < wordHide.length; i++) {
    wordToFind.push('_')
  }

  console.log(chalk.blue('==================================================='))
  console.log(chalk.blue('Le jeu du pendu game'))
  console.log(chalk.blue('==================================================='))
  let lifeCount = 7
  let hangmanPicsFrame = 0

  while (lifeCount && wordToFind.includes('_')) {
    let letter = ''

    console.log(`Nombre de vie : ${lifeCount} \n ${hangmanPicsFrame == 6 ? chalk.red(hangmanPics[hangmanPicsFrame]) : hangmanPics[hangmanPicsFrame]}`)

    console.log(chalk.blue('==================================================='))

    if (lifeCount < 2){
      console.log(chalk.red('==================================================='))
      console.log(chalk.red('Attention il vous reste qu\'une seule vie !!'))
      console.log(chalk.red('==================================================='))
    }

    console.log(`Le mot : ${wordToFind.join(' ')}`)
    console.log(chalk.blue('==================================================='))
    letter = readline.question('La lettre : ').toLowerCase()

    for (let i = 0; i < wordHide.length; i++) {
      wordHide[i] === letter ? wordToFind[i] = letter : '' 
    }

    if (wordHide.includes(letter)) {
      console.log(chalk.green('==================================================='))
      console.log(chalk.green('Tu es sur le bon chemin !'))
      console.log(chalk.green('==================================================='))
    } else {
      lifeCount--
      hangmanPicsFrame++
      console.log(chalk.red('==================================================='))
      console.log(chalk.red('Mauvaise lettre...'))
      console.log(chalk.red('==================================================='))
    }
  }

  if (lifeCount === 0) {
    console.log(chalk.red(' '))
    console.log(chalk.red('==================================================='))
    console.log(chalk.red('==================================================='))
    console.log(chalk.red('GAME OVER !'))
    console.log(chalk.red('==================================================='))
    console.log(chalk.red('==================================================='))
    console.log(chalk.red('==================================================='))
    console.log(`Word is : ${wordHide}\n\n`)
    let choice = readline.question('Voulez-vous rejouer ?\nYes [y]\nNo [n]\nVotre choix : ')
    choice === 'y' ? '' : process.exit(1)
  } else {
    console.log('YOU WIN !!!')
    console.log(`Vous avez trouvé le mot : ${wordHide} !!!!!\n\n`)
    let choice = readline.question('Voulez-vous rejouer ?\nYes [y]\nNo [n]\nVotre choix : ')
    choice === 'y' ? '' : process.exit(1)
  }
}
const fs = require('fs')
const readline = require('readline-sync')

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

  console.log('Le jeu du pendu game')

  let lifeCount = 10
  let hangmanPicsFrame = 0







  while (lifeCount && wordToFind.includes('_')) {

    console.log(hangmanPics[hangmanPicsFrame])

    let letter = ''
    console.log(`Nombre de vie : ${lifeCount}`)

    if (lifeCount < 2){
      console.log('Attention il vous reste qu\'une seule vie !!');
    }

    console.log(`Le mot : ${wordToFind.join(' ')}`)

    letter = readline.question('La lettre : ').toLowerCase()

    for (let i = 0; i < wordHide.length; i++) {
      wordHide[i].toLowerCase() === letter ? wordToFind[i] = letter : '' 
    }

    if (wordHide.includes(letter)) {
      console.log('Tu es sur le bon chemin')
    } else {
      lifeCount--
      hangmanPicsFrame++
      console.log('outch');
    }
  }



  if (lifeCount === 0) {
    console.log('GAME OVER !')
    console.log(`Word is : ${wordHide}\n\n`)
    let choice = readline.question('Voulez-vous rejouer ?\nYes [y]\nNo [n]\nVotre choix : ')
    choice === 'y' ? '' : process.exit(1)
  } else {
    console.log('YOU WIN !!!')
    console.log(`Vous avez trouvez le mot : ${wordHide} !!!!!\n\n`)
    let choice = readline.question('Voulez-vous rejouer ?\nYes [y]\nNo [n]\nVotre choix : ')
    choice === 'y' ? '' : process.exit(1)
  }
}
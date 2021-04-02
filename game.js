const fs = require('fs')
const readline = require('readline-sync')

// import random word function
const { randomWord } = require('./randomWord')

// ------------- while program --------
let running = true;

while (running) {
// initialisation 
let hideWord = randomWord

let wordToFind = []

  for (let i = 0; i < hideWord.length; i++) {
    wordToFind.push('_')
  }

  console.log('Le jeu du pendu game')

  let lifeCount = 10

  while (lifeCount && wordToFind.includes('_')) {

    let letter = ''
    console.log(`vie restant : ${lifeCount}`)
    console.log(`Le mot : ${wordToFind.join(' ')}`)

    letter = readline.question('La lettre : ').toLowerCase()

    for (let i = 0; i < hideWord.length; i++) {
      hideWord[i] === letter ? wordToFind[i] = letter : '' 
    }

    if (hideWord.includes(letter)) {
      console.log('Tu es dans le bon chemin garçon')
    } else {
      lifeCount--
      console.log(`C\'est pas la bonne lettre`)
    }
  }
}
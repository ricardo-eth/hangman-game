
const fs = require('fs')
const { randomInt } = require('crypto')



// ----------------- read file --------------
// import dict file
const DICT_PATH = 'dict.txt'

// Read file
const dicStr = fs.readFileSync(DICT_PATH, 'utf-8')
const dicTab = dicStr.split('\n')

// ----------------- random word on file --------------
const selectedWord = dicTab

const n = randomInt(0, selectedWord.length)

const randomWord = selectedWord[n]

exports.randomWord = randomWord
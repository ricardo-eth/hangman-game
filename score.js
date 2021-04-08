const fs = require('fs')
const readline = require('readline-sync')

  // Recuperation of score 
  let objScore = ''
  try {
    objScore = fs.readFileSync('./bestScore.json', 'utf-8') 
  } catch (e) {
    console.error(e.message) 
    process.exit(1)
  }

  // we parse it and create a new array of the previous score to better handle it
  objScore = JSON.parse(objScore)

  //let score = []

  // for (let i = 0; i < objScore.score.length; i++) {
  //   score.push(objScore.score[i].map(a => a)) // ou (a) => { return a}
  // }

   let joueurId = readline.question('votre nom: ')
    while (joueurId.length < 1 ) {
    joueurId = readline.question(`\nil faut au rentrer 1 charactère\n${('votre nom: ')}`)
  }

   let life = 5

// We save the score if new high score !!!
  objScore.score.push([joueurId, life])
  objScore.score.sort((a,b) => b[1] - a[1])

  console.log('HIGH SCORE\n')
  for (let i = 0; i < objScore.length; i++) {
  objScore. score[i][0] === joueurId ? console.log(`${objScore.score[i][0]} : ${score[i][1]} life remaining`) : console.log(`${objScore.score[i][0]} : ${objScore.score[i][1]} life remaining`)
  }

  // and we send it back to our JSON data base
    fs.writeFileSync('./bestScore.json', JSON.stringify(objScore))
 
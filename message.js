const chalk = require('chalk');

exports.welcome = () => {
console.log(chalk.blue('==================================================='))
console.log(chalk.blue('Le jeu du pendu game'))
console.log(chalk.blue('==================================================='))
}

exports.lastLife = () => {
console.log(chalk.red('==================================================='))
console.log(chalk.red('Attention il vous reste qu\'une seule vie !!'))
console.log(chalk.red('==================================================='))
}

exports.goodWay = () => {
console.log(chalk.green('==================================================='))
console.log(chalk.green('Tu es sur le bon chemin !'))
console.log(chalk.green('==================================================='))
}

exports.badWay = () => {
console.log(chalk.red('==================================================='))
console.log(chalk.red('Mauvaise lettre...'))
console.log(chalk.red('==================================================='))
}

exports.gameOver = (wordHide) => {
console.log(chalk.red(' '))
console.log(chalk.red('==================================================='))
console.log(chalk.red('==================================================='))
console.log(chalk.red('GAME OVER !'))
console.log(chalk.red('==================================================='))
console.log(chalk.red('==================================================='))
console.log(chalk.red('==================================================='))
console.log(`Le mot était : ${wordHide}\n\n`)
}

exports.youWin = (wordHide) => {
console.log(chalk.green('==================================================='))
console.log(chalk.green('==================================================='))
console.log(chalk.green('==================================================='))
console.log('')
console.log(chalk.green('                   YOU WIN !!!                     '))
console.log('')
console.log(`      Vous avez trouvé le mot : ${wordHide} !\n\n       `)
console.log(chalk.green('==================================================='))
console.log(chalk.green('==================================================='))
console.log(chalk.green('==================================================='))
}
const Game = require('./game')
const DICT_PATH = 'dict.txt'

const game = new Game()

try {
  game.init(DICT_PATH)
  game.run()
} catch (e) {
  console.error(e.toString())
}
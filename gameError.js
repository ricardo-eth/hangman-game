
class GameError extends Error {
  constructor(message, error) {
    super(message)
    this.name = 'GameError'
    this.code = error.code
    this.errno = error.errno
  }
  toString() {
    return `${this.name} ${this.code}: ${this.message}`
  }
}

module.exports = GameError;
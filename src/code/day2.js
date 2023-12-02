const { getInput, splitBreakLine } = require('../utils');

const config = {
  red: 12,
  green: 13,
  blue: 14
}

const games = splitBreakLine(getInput(2)).map(game => {
  const [name, moves] = game.split(':');

  const shifts = moves.split(';')
  const shiftsMapped = shifts.map(s => {
    const values = s.split(',')
    return values.map(value => {
      const color = Object.keys(config).find(color => value.includes(color))

      return {
        color,
        number: Number(value.replace(color, '').trim())
      }
    })
  })

  return {
    id: Number(name.replace('Game ', '')),
    moves: shiftsMapped
  }
});

const possibleGames = games.filter(({ moves }) => {
  return moves.every((move) => {
    return move.every(({ color, number }) => {
      const cfg = config[color]

      return cfg >= number
    })
  })
})

const result = possibleGames.reduce((acc, { id }) => acc + id, 0)

console.log(`The result of day2 PART 1 is: ${result}`)
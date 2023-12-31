const fs = require('fs');

module.exports = {
  splitBreakLine: text => text.split("\n"),
  splitEmptyLine: text => text.split(/\n\s*\n/),
  getInput: day => fs.readFileSync(`./src/input/day${day}.txt`, 'utf8'),
}
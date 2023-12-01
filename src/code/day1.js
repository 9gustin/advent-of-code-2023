const { getInput, splitBreakLine } = require('../utils');

const data = splitBreakLine(getInput(1));
const strNumber = {
  'zero': 0,
  'one': 1,
  'two': 2,
  'three': 3,
  'four': 4,
  'five': 5,
  'six': 6,
  'seven': 7,
  'eight': 8,
  'nine': 9,
}

const getOnlyNumericValues = str => [...str].filter(char => !isNaN(char))
const getNumericAndStringValues = str => {
  const numericValues = getOnlyNumericValues(str)
  const strNumbers = Object.keys(strNumber).filter(strN => str.indexOf(strN) >= 0)

  if (strNumbers?.length) {
    const firstStrNumber = strNumbers.sort((a, b) => str.indexOf(a) - str.indexOf(b))[0]
    const lastStrNumber = strNumbers.sort((a, b) => str.lastIndexOf(b) - str.lastIndexOf(a))[0]

    const firstNumber = str.indexOf(firstStrNumber) < str.indexOf(numericValues.at(0)) ? strNumber[firstStrNumber] : numericValues.at(0)
    const lastNumber = str.lastIndexOf(lastStrNumber) > str.lastIndexOf(numericValues.at(-1)) ? strNumber[lastStrNumber] : numericValues.at(-1)
    return [firstNumber, lastNumber]
  }

  return numericValues
}

const getCalibrationValues = (getAllNumbers) => data.map((strCalibration) => {
  const allNumbers = getAllNumbers(strCalibration)
  const firstNumber = allNumbers.at(0)
  const lastNumber = allNumbers.at(-1)

  return Number(`${firstNumber}${lastNumber}`)
})

const part1Values = getCalibrationValues(getOnlyNumericValues)
const calibrationValuePart1 = part1Values.reduce((acc, current) => acc + current, 0)

console.log(`The result of the PART 1 is: ${calibrationValuePart1}`)

const part2Values = getCalibrationValues(getNumericAndStringValues)
const calibrationValuePart2 = part2Values.reduce((acc, current) => acc + current, 0)

console.log(`The result of the PART 2 is: ${calibrationValuePart2}`)

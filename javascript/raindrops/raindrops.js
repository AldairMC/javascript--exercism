// Exercism Raindrops
const DATA = {
  3: 'Pling',
  5: 'Plang',
  7: 'Plong'
}

const KEY = Object.keys(DATA)

export const convert = num => {
  let number = KEY
    .filter(i => num % i === 0)
    .map(i => DATA[i])
    .join('')
    return number || num.toString()
}
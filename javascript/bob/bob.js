/* eslint-disable no-unused-vars */
//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const auxiliar = (sentence) => {
  let y = /[a-z]/g
  return sentence
    .split('')
    .map(i => y.test(i))
    .reduce((a,b) => a || b)
}

export const hey = (message) => {
  let aux = message
    .replace(/\s/g, '')
    .split('')
    .reverse()
    .join('')
  
  if(Number(message) === 0) return 'Fine. Be that way!'
  else if(aux[0] === '?' && !auxiliar(aux)) return 'Calm down, I know what I\'m doing!'
  else if(aux[0] !== '?' && !auxiliar(aux)) return 'Whoa, chill out!'
  else if(aux[0] === '?' && (auxiliar(aux) || /\W/g.test(aux))) return 'Sure.'
  else return 'Whatever.'
};





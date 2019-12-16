/* eslint-disable no-unused-vars */
//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const auxiliar = (sentence) => {
  return /^[A-Z]+$/.test(sentence.replace(/\W|\d/g, ''))
}

export const hey = (message) => {
  let aux = message
    .replace(/\s/g, '')
  
  if(Number(message) === 0) return 'Fine. Be that way!'
  else if(aux[aux.length-1] === '?'){
    if(!auxiliar(aux)){
      return 'Sure.'
    }else{
      return 'Calm down, I know what I\'m doing!' 
    }
  }else if(aux[aux.length-1] !== '?' && auxiliar(aux)) return 'Whoa, chill out!'
  else return 'Whatever.'
};





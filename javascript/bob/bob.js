/* eslint-disable no-unused-vars */
//
// Bob' exercise

const auxiliar = (sentence) => {
  return /^[A-Z]+$/.test(sentence.replace(/\W|\d/g, ''))
}

export const hey = (message) => {
  let aux = message.trim()
  
  if(Number(message) === 0) return 'Fine. Be that way!'
  else if(aux[aux.length-1] === '?'){
    if(!auxiliar(aux)) return 'Sure.'
     return 'Calm down, I know what I\'m doing!' 
  }else if(aux[aux.length-1] !== '?' && auxiliar(aux)) return 'Whoa, chill out!'
  return 'Whatever.'
};

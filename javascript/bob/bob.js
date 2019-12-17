/* eslint-disable no-unused-vars */
//
// Bob' exercise
export const hey = (message) => {
  let aux = message.trim()
  let regExp = /^[A-Z]+$/.test(message.replace(/\W|\d/g, ''))
  
  if(Number(message) === 0) return 'Fine. Be that way!'
  else if(aux.slice(-1) === '?'){
    if(!regExp) return 'Sure.'
     return 'Calm down, I know what I\'m doing!' 
  }else if(aux.slice(-1) !== '?' && regExp) return 'Whoa, chill out!'
  return 'Whatever.'
};

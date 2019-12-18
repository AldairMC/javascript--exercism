// Bob exercise
export const hey = (message) => {
  let aux = message.trim()
  let regExp = /^[A-Z]+$/.test(message.replace(/\W|\d/g, ''))
  const isSilence = aux === ''
  const isAsking = aux.slice(-1) !== '?' 

  if(isSilence) return 'Fine. Be that way!'
  if(!isAsking) return !regExp? 'Sure.' : 'Calm down, I know what I\'m doing!' 
  if(isAsking && regExp) return 'Whoa, chill out!'
  return 'Whatever.'
}

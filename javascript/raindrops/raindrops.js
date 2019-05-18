// Exercism Raindrops
const DATA = {
  3: 'Pling',
  5: 'Plang',
  7: 'Plong'
}

const KEY = Object.keys(DATA).map(Number)

export const convert = num => {
  var factor = []
  KEY.map(i => {
    if(num % i === 0){
      factor.push(i)
    }
  })
  if(factor.length != 0){
   return factor.map(i => DATA[i]).join('') 
  } 
   return num.toString()
}
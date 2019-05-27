// leap Exercism
export function isLeap(year){
  let a = num % 4 === 0 && num % 100 === 0 && num % 400 === 0
  let b = num % 4 === 0 && num % 100 != 0 && num % 400 != 0
  return a || b  
}

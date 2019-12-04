// leap Exercism
export function isLeap(year){
  let a = year % 4 === 0 && year % 100 === 0 && year % 400 === 0
  let b = year % 4 === 0 && year % 100 != 0 && year % 400 != 0
  return a || b  
}

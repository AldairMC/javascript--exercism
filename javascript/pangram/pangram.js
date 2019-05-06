export const isPangram = (str) => {
  let alphabet = new Set('abcdefghijklmnopqrstuvwxyz'.split(""))
    
  let test = new Set(str
    .toLowerCase()
    .split(""))
  
  const interseption = new Set(Array.from(alphabet).filter(x => test.has(x)));
  var validate = (interseption.size === 26)? true : false
  return validate
  
}
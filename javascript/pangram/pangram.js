const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'.split("");

export const isPangram = (str) => {
      
  let test = str
    .toLowerCase()
    .split("");
  
  const intersection = new Set(ALPHABET.filter(x => test.includes(x)));
  return (intersection.size === 26);
}


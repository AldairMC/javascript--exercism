//Scrabble-score exercise
const LETTER = {
  'AEIOULNRSTaeioulnrst': 1,
  'DGdg': 2,
  'BCMPbcmp': 3,
  'FHVWYfhvwy': 4,
  'Kk': 5,
  'JXjx': 8,
  'QZqz': 10
}

export const score = (word) => {
  if(word === '') return 0
  return word
    .split('')
    .map(i => Object.keys(LETTER))
    .map((i, k) => i.filter((i) => i.includes(word[k])))
    .map(i => LETTER[i[0]])
    .reduce((a,b) => a+b)
};

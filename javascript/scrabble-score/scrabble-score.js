//Scrabble-score exercise
const LETTERS = {
  'aeioulnrst': 1,
  'dg': 2,
  'bcmp': 3,
  'fhvwy': 4,
  'k': 5,
  'jx': 8,
  'qz': 10
}

export const score = (word) => {
  return word
    .split('')
    .map((i, j) => Object.keys(LETTERS)
      .find(i => i.includes(word[j].toLowerCase())))
    .map(i => LETTERS[i])
    .reduce((a,b) => a+b, 0)
};

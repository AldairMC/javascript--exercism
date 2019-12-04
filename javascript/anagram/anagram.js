//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
export class Anagram {
  constructor(word) {
    this.word = word     
  }

  matches(array) {
    const NUEVO = []
    let x = array.map( i => 
      (i.split('').sort().join('').toLowerCase())
    )
    x.map((i, j) => {
      if(i === this.word.split('').sort().join('')){
        NUEVO.push(array[j])
      }
    })
    return NUEVO
  }
}

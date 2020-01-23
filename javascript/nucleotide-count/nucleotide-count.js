//Exercise nucleotide count
export class NucleotideCounts {
  static parse(nucleotide) {
  const OBJ = JSON.parse('{"A": 0, "C": 0, "G": 0,"T": 0}')
  const isValid = (!(/^[A|T|G|C]+$/.test(nucleotide)) && nucleotide)
    if(isValid) throw new Error("Invalid nucleotide in strand")
    nucleotide.split('').map(i => OBJ[i] += 1)
    return Object.values(OBJ).join(' ')
  }
} 
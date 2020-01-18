//protein translation exercise
const PROTEINS = {
    'AUG': 'Methionine',
    'UUU': 'Phenylalanine', 'UUC': 'Phenylalanine',
    'UUA': 'Leucine', 'UUG': 'Leucine',
    'UCU': 'Serine', 'UCC': 'Serine', 'UCA': 'Serine', 'UCG': 'Serine',
    'UAU': 'Tyrosine', 'UAC': 'Tyrosine',
    'UGU': 'Cysteine', 'UGC': 'Cysteine',
    'UGG': 'Tryptophan',
    'UAA': 'STOP', 'UAG': 'STOP', 'UGA': 'STOP'
}

const isValid = codon => (codon.length % 3 !== 0 || !(/^[A|U|G|C]+$/.test(codon)))

export const translate = (codon) => {
  if(!codon) return []
  if(isValid(codon)) throw new Error("Invalid codon");
  let codons = codon
    .split(/UAA|UAG|UGA/)[0]
    .match(/.{1,3}/g)
  return codons? codons.map(i => PROTEINS[i]) : []
};



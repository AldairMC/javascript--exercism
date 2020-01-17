//protein translation exercise
const PROTEINS = {
    'aug':'Methionine',
    'uuu': 'Phenylalanine', 'uuc': 'Phenylalanine',
    'uua': 'Leucine', 'uug': 'Leucine',
    'ucu': 'Serine', 'ucc': 'Serine', 'uca': 'Serine', 'ucg': 'Serine',
    'uau': 'Tyrosine', 'uac': 'Tyrosine',
    'ugu': 'Cysteine', 'ugc': 'Cysteine',
    'ugg': 'Tryptophan',
    'uaa': 'STOP', 'uag': 'STOP', 'uga': 'STOP'
}

const aux = (codons) => {
  let i = 0
  let arr = []
  while(codons[i] !== 'STOP' && i < codons.length){
    arr.push(codons[i])
    i++
  }
  return arr
}

export const translate = (codon) => {
  if(!codon) return []
  if(codon.length % 3 !== 0 || !(/^[a|u|g|c]+$/.test(codon.toLowerCase()))) throw new Error("Invalid codon");
  let codons = codon
    .toLowerCase()
    .match(/.{1,3}/g)
    .map(i => PROTEINS[i])
  return aux(codons)
};



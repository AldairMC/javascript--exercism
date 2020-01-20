//Exercise nucleotide count  
export class NucleotideCounts {  
  static parse(nucleotide) {
    if(nucleotide === '') return '0 0 0 0'
    if(!(/^[A|T|G|C]+$/.test(nucleotide))) throw new Error("Invalid nucleotide in strand")
    let a = 0
    let c = 0
    let g = 0
    let t = 0
    nucleotide.split('').sort().map(i => {
      if(i === 'A') a++
      else if(i === 'C') c++
      else if(i === 'G') g++
      else if(i === 'T') t++
    })
    return `${a} ${c} ${g} ${t}`
  }
}

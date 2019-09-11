//
// This is only a SKELETON file for the 'Grains' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Grains {
  square(num) {
    const sq = 2**(num-1)
    return BigInt(sq).toString()
  }

  total() {
    const c64 = 2**64
    const c1 = 2**0 
    return (BigInt(c64) - BigInt(c1)).toString()
  }
}

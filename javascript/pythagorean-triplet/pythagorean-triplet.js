//
// This is only a SKELETON file for the 'Pythagorean Triplet' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triplet {
  constructor(a, b, c) {
    this.a = a
    this.b = b
    this.c = c
  }

  sum() {
    return (this.a + this.b + this.c)
  }

  product() {
    return (this.a * this.b * this.c)
  }

  isPythagorean() {
    return (Math.pow(this.a, 2) + Math.pow(this.b, 2) === Math.pow(this.c, 2))
  }

  static where() {
    throw new Error("Remove this statement and implement this function");
  }
}

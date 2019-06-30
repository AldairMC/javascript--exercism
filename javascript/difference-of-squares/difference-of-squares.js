//Difference of Squares exercise.

export class Squares {
  constructor(a) {
    this.a = a
  }

  get sumOfSquares() {
    let a = 0;
    let i = 1;
    while(i <= this.a){
      a += Math.pow(i, 2)
      i++
    }
    return a
  }

  get squareOfSum() {
    let a = 0;
    let i = 1;
    while(i <= this.a){
      a += i
      i++
    }
    return Math.pow(a, 2)
  }

  get difference() {
    return this.squareOfSum - this.sumOfSquares
  }
}

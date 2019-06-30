//Difference of Squares exercise.

export class Squares {
  constructor(square) {
    this.square = square
  }
  
  range(){
    let arr = []
    let i = 1
    while(i <= this.square){
      arr.push(i)
      i++
    }
    return arr
  }
  
  sum(){
    return this.range().reduce((a,b) => a+b)
  }

  get sumOfSquares() {
     return this.range()
      .map(i => Math.pow(i, 2))
      .reduce((a,b) => a+b)
  }

  get squareOfSum() {
   return Math.pow(this.sum(), 2)
  }

  get difference() {
    return this.squareOfSum - this.sumOfSquares
  }
}

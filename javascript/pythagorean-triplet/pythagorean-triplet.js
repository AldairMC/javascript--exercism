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
  
  hasRule(){
    return (this.a < this.b && this.b < this.c)
  }

  sum() {
    if(this.hasRule()) return [this.a, this.b, this.c].reduce((a,b) => a+b)
  }

  product() {
    if(this.hasRule()) return [this.a, this.b, this.c].reduce((a,b) => a*b)
  }

  isPythagorean() {
    if(this.hasRule()) return (Math.pow(this.a, 2) + Math.pow(this.b, 2) === Math.pow(this.c, 2))
  }

  static where(obj) {
    let aux2 = []
    for(let i = obj.minFactor || 1; i <= obj.maxFactor; i++){
      for(let j = obj.minFactor || 1; j <= obj.maxFactor; j++){
        for(let k = obj.minFactor || 1; k <= obj.maxFactor; k++){
          let triplet = new Triplet(i, j, k);
          if((triplet.hasRule()) && triplet.isPythagorean()){
            if(!obj.sum) aux2.push(triplet)
            if(triplet.sum() == 180 ) aux2.push(triplet)
          }
        }
      } 
    }
    return aux2;
  }
}

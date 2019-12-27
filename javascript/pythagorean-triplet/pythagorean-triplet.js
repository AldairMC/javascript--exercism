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
  //Function aux
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
    if(this.hasRule()) return ((this.a**2 + this.b**2) === this.c**2)
  }

  static where(obj) {
    let aux = []
    for(let i = obj.minFactor || 1; i <= obj.maxFactor; i++){
      for(let j = obj.minFactor || 1; j <= obj.maxFactor; j++){
        for(let k = obj.minFactor || 1; k <= obj.maxFactor; k++){
          let triplet = new Triplet(i, j, k);
          if((triplet.hasRule()) && triplet.isPythagorean()){
            if(!obj.sum) aux.push(triplet)
            else if(triplet.sum() === obj.sum) aux.push(triplet)
          }
        }
      } 
    }
    return aux;
  }
}

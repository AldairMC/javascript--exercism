export class Triangle{
  constructor(a,b,c){
    this.a = a
    this.b = b
    this.c = c
  }

  ORDER(){
    let x = []
      x.push(this.a, this.b, this.c)
    return x.sort((a,b) => b-a)   
  }

  ERROR(){
    return this.ORDER()[1] + this.ORDER()[2] < this.ORDER()[0] 
      || this.ORDER()[2] < 0 
      || this.ORDER()[2] === 0
  }

  kind(){
    if(this.ERROR()){
      throw new Error('error')
    }else{
      if(this.ORDER()[0] === this.ORDER()[2]) return 'equilateral'
      if(this.ORDER()[0] === this.ORDER()[1]) return 'isosceles'
      if(this.ORDER()[0] !== this.ORDER()[2]) return 'scalene'
    }
  }
}

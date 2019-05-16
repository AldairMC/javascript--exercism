export class Triangle{
  constructor(a, b, c){
    this.a = a
    this.b = b
    this.c = c    
  }

  kind(){
    if((this.a == this.b && this.a != this.c) || (this.b == this.c && this.b != this.a) || (this.a == this.c && this.a != this.b) ){
       return 'isosceles'
    }

    if((this.a + this.b > this.c) || (this.a + this.c > this.b) || (this.b + this.c > this.a)) {
      return 'scalene'
    }else{
      throw new Error('error')
    } 
    if(this.a === this.b && this.b === this.c && this.c === this.a){
      return 'equilateral'  
    }else{
      throw new Error('error')
      
    
    
    
//     if(this.a != this.b && this.a != this.c && this.b != this.c){
//       
//     }if(this.a < 0 || this.b < 0 || this.c < 0){
//       throw new Error('error')
//     }
//     else 
      }
   }
}

export class Luhn{
  constructor(code){
    this.code = code
    this.valid = this.validate()
  }
 
  CONVERT_CODE_ARRAY(){ 
     return this.code
        .replace(/ /g, '')
        .split('')
        .map(Number)
  }
  
  GET_ODD(){
    return [...this.CONVERT_CODE_ARRAY()]
      .filter((i,j) => !(j%2))
  }
  
  GET_PAIRS(){
    return this.CONVERT_CODE_ARRAY() 
      .filter((i,j) => (j%2))
      .map(i => i+i)
      .concat(this.GET_ODD())
  }
  
  //NAS
  nas(){
    let final = this.GET_PAIRS() 
      .join('')
      .split('')
      .map(Number)
      .reduce((i,j) => (i+j))
 
    return final % 10 === 0
  }
  
  //Credit/Debit Card
  card(){  
    let final = this.GET_PAIRS()
      .map(i => (i > 9)? i-9 : i)
      .reduce((i,j) => (i+j))

     return (final % 10 === 0)
  }
  
  validate(){
    if((this.code.length <= 1) || this.code[0] === ' ') return false
    if(RegExp(/[0-9]{3}\s[0-9]{3}\s[0-9]{3}/g).test(this.code)) return this.nas()
    if(RegExp(/[0-9]{4}\s[0-9]{4}\s[0-9]{4}\s[0-9]{4}/g).test(this.code)) return this.card()
    return (RegExp(/[^\d\s]/g).test(this.code))? false : true
  }
}


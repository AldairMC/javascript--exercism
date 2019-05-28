export class Luhn{
  constructor(code){
    this.code = code
    this.valid = this.validate()
  }
  
  validate(){
    if((this.code.length <= 1) || this.code[0] === ' ') return false
    if(RegExp(/[0-9]{3}\s[0-9]{3}\s[0-9]{3}/g).test(this.code)) return this.nas()
    if(RegExp(/[0-9]{4}\s[0-9]{4}\s[0-9]{4}\s[0-9]{4}/g).test(this.code)) return this.card()
    return (RegExp(/[^\d\s]/g).test(this.code))? false : true
  }
  
  //NAS
  nas(){
    var t = []
    
    var y = this.code
    .replace(/ /g, '')
    .split('')
    .map(Number)


    for(let i in y){
      if(i % 2 != 0 ){
        t.push(y[i]*2)
      }else{
        t.push(y[i])
      }
    }

    var sum = t
      .join('')
      .split('')
      .map(Number)
      .reduce((i,j) => (i+j))

    return ((sum) % 10 === 0)
  }
  
  //credit/debit card
  card(){
    var t = []
    
    var y = this.code
    .replace(/ /g, '')
    .split('')
    .map(Number)

    for(let i in y){
      if(i % 2 === 0){
        t.push((y[i]*2))
      }else{
        t.push(y[i])
      }
    }

    
    var sum = t
      .map(i => (i > 9)? i-9 : i)
      .reduce((i,j) => (i+j))

    return ((sum) % 10 === 0)
  }
}

// var x = '1232 4563 7890'
//   .split(/\s/)
//   .map(i => i.split('').map(Number))
//   .map(i => i[1] + i[3])
//   .reduce((i,j) => i+j)
  
//   console.log(x % 10 === 0)

// const tess = (n) => {
// return RegExp(/\W|\D/g).test(n)
// }

//NAS

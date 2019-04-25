export const toRna = (str) => {
  var x = []
  for(var i = 0; i < str.length; i++){
    if(str[i] === 'A'){
      x.push('U')  
    }else if(str[i] === 'C'){
      x.push('G')
    }else if(str[i] === 'T'){
      x.push('A')
    }else{
      x.push('C')
    }
  }
  return x.join("")
}
const code_error = (d1,d2) => {
   if(d2.length < d1.length || d2.length > d1.length ){
     if(d2.length == 0 && d1.length == 1){
       throw new Error('right strand must not be empty')
     }else if(d1.length == 0 && d2.length == 1){
       throw new Error('left strand must not be empty')
     }   
   }
   throw new Error('left and right strands must be of equal length')  
}

export const compute = (dna1, dna2) => {
  if(dna1.length != dna2.length){ 
    code_error(dna1, dna2);
  }
  var aux = 0
  for(var i = 0; i < dna1.length; i++){
    if(dna1[i] != dna2[i]){
       aux += 1
    }
  }
  return aux
}

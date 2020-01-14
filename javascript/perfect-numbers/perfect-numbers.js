//Perfect number exercice
export const classify = (num) => {
  if(num <= 0) throw new Error('Classification is only possible for natural numbers.')
  let aux = 0;
  for(let i = 1; i < num; i++){
    if(num % i === 0){
      aux += i     
    }    
  }
  if(aux === num) return 'perfect';
  if(aux < num) return 'deficient'
  if(aux > num) return 'abundant'
};

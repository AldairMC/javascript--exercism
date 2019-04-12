export const solve = (x, y) => {
  const v = (x**2)+(y**2)
  var w = Math.sqrt(v)
  var re = /[A-Za-z]/
  if((x || y) === re){
    return null
  }else{
    if(w <= 1){
      return 10
    }else if(w > 1 && w <= 5){
      return 5
    }else if(w > 5 && w <= 10){
      return 1
    }else{
    return 0
    } 
  }
}
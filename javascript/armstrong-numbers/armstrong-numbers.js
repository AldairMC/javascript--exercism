export const validate = (n) => {
 var t = n.toString()
 var y = 0
  for(var i in t){ 
    y += (t[i]**(t.length))
  }
  if(n === y) return true
    return false
}
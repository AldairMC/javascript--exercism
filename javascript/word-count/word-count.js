//
// This is only a SKELETON file for the 'Word Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export const countWords = (str) => {
  let obj = {}
  const word = str.replace(/\W+/g, "-").toLowerCase().split("-")
  word.map(i => {
    if(!(i in obj)){
      obj[i] = 1
    }else{
      obj[i] = obj[i] +1
    }
  })
  return obj
};

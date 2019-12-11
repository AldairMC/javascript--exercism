//
// This is only a SKELETON file for the 'Isogram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export const isIsogram = (word) => {
  let aux = new Set(word.toLocaleLowerCase())
  const aux2 = []
  aux.forEach(i => {
    aux2.push(i)
  })
  let aux3 = aux2.join('').replace(/\s|-/g, '')
  return (aux3 === word.replace(/\s|-/g, '').toLocaleLowerCase())
};

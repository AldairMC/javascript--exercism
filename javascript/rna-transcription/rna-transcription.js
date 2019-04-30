const CODE_RNA = {
    A: 'U',
    G: 'C',
    C: 'G',
    T: 'A'
  }

export const toRna = (str) => {
  return str
    .split('')
    .map(i => CODE_RNA[i])
    .join('');
}
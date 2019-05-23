export const parse = (str) => {
  return str.replace(/(?:-)|(?: )|(?:_)/g, ' ')
            .split(' ')
            .map(i => i[0])
            .join('')
            .toUpperCase()
}

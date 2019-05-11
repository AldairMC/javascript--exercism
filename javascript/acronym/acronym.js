export const parse = (str) => {
  return str.replace(/\s+|[-_]|\W'/g, ' ')
            .split(' ')
            .map(i => i[0])
            .join('')
            .toUpperCase()
}

export const solve = (x, y) => {
  const cord = (x**2)+(y**2)
  const h = Math.sqrt(cord)
  if(isNaN(h)) return null
  if(h <= 1) return 10
  if(h > 1 && h <= 5) return 5
  if(h > 5 && h <= 10) return 1
    return 0
} 
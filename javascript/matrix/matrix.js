// Exercism Matrix
export class Matrix{
  constructor(matriz, rows){
    this.matriz = matriz
    this.rows = rows

    const convert = 
      this.matriz
        .split('\n')
        .map(i => i.split(' ').map(Number))
    
    //Rows
    this.rows = convert
    
    //Columns
    const mTrans = a => {
      return Object.keys(a[0]).map(i => {
        return  a.map(j => {
           return j[i]
        })
      })
    }
    this.columns = mTrans(convert)
  }
}
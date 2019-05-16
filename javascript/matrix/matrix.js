// Exercism Matrix
export class Matrix{
  constructor(matrix){
    this.rows = matrix
        .split('\n')
        .map(i => i.split(' ').map(Number));
    this.columns = this.transpose();
    }
  
    transpose() {
      return Object.keys(this.rows[0]).map(i => {
        return this.rows.map(j => j[i]);
      });
    }
}
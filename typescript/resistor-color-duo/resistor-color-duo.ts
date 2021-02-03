let COLORS: string[] = [
  'black', 
  'brown', 
  'red', 
  'orange', 
  'yellow', 
  'green', 
  'blue', 
  'violet', 
  'grey', 
  'white'
] 

export class ResistorColor {
  private colors: string[];

  constructor(colors: string[]) {
    this.colors = colors;
  }
  
  value = (): number => {
    if(this.colors.length === 1){
      throw new Error('At least two colors need to be present')
    }else{
      let nums: number[] = this.colors.map(i => COLORS.indexOf(i), 2) 
      return Number(nums.join(''))
    }
  }
}

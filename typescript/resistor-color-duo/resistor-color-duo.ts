const COLORS: string[] = [
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
    if(this.colors.length <= 1){
      throw new Error("At least two colors need to be present")
    }
  }
  
  value = (): number => Number(
    this.colors
      .slice(0, 2)
      .map(i => COLORS.indexOf(i))
      .join('')
    )
}

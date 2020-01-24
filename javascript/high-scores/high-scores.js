//High scores exercise
export class HighScores {
  constructor(input) {
    this.input = input 
  }

  get scores() {
    return this.input
  }

  get latest() {
    return (this.input)
      .sort((a, b) => a-b)
      .filter((i, j) => (i != 0))[0]
  }

  get personalBest() {
    return (this.input)
      .sort((a, b) => b-a)[0]
  }

  get personalTopThree() {
    return (this.input)
      .sort((a, b) => b-a)
      .filter((i, j) => (j < 3))
  }
}

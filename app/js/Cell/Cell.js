class Cell {
  isAlive;

  constructor(isAlive) {
    this.isAlive = isAlive;
  }

  live() {
    this.isAlive = true;
  }

  die() {
    this.isAlive = false;
  }
}

export default Cell;

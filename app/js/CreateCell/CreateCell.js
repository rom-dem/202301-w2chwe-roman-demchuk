class CreateCell {
  positionX;
  positionY;
  isAlive = false;

  constructor(positionX, positionY) {
    this.positionX = positionX;
    this.positionY = positionY;
  }

  live() {
    this.isAlive = true;
  }
}

export default CreateCell;

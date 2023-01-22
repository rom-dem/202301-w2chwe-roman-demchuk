const findAliveNeighbours = (board, selectedCellColumn, selectedCellRow) => {
  let totalAliveNeighbours = 0;

  for (let column = -1; column < 2; column++) {
    for (let row = -1; row < 2; row++) {
      const currentCell =
        board[selectedCellColumn + column][selectedCellRow + row].isAlive;
      totalAliveNeighbours += Number(currentCell);
    }
  }

  totalAliveNeighbours -= board[selectedCellColumn][selectedCellRow].isAlive;

  return totalAliveNeighbours;
};

export default findAliveNeighbours;

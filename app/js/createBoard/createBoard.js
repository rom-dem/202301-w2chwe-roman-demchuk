const createBoard = (boardWidth, boardHeight) => {
  const board = [];
  for (let xAxis = 0; xAxis < boardHeight; xAxis++) {
    board[xAxis] = [];
    for (let yAxis = 0; yAxis < boardWidth; yAxis++) {
      board[xAxis][yAxis] = "";
    }
  }

  return board;
};

export default createBoard;

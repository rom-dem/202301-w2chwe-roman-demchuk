import Cell from "../Cell/Cell.js";

const createBoard = (boardWidth, boardHeight) => {
  const board = [];
  for (let xAxis = 0; xAxis < boardHeight; xAxis++) {
    board[xAxis] = [];
    for (let yAxis = 0; yAxis < boardWidth; yAxis++) {
      board[xAxis][yAxis] = new Cell(Math.floor(Math.random() * 2) === 1);
    }
  }

  return board;
};

export default createBoard;

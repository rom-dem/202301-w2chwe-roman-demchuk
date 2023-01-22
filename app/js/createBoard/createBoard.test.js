import createBoard from "./createBoard.js";

describe("Given the function createBoard", () => {
  describe("When it receives width 3 and height 2", () => {
    test("Then it should return an array of 3 x 2 with lenght 2", () => {
      const boardWidth = 3;
      const boardHeight = 2;
      const expectedResult = 2;

      const obtainedResult = createBoard(boardWidth, boardHeight).length;

      expect(obtainedResult).toBe(expectedResult);
    });
  });

  describe("When it receives width 5 and height 4", () => {
    test("Then it should return an array of 5 x 4 with lenght 4", () => {
      const boardWidth = 5;
      const boardHeight = 4;
      const expectedResult = 4;

      const obtainedResult = createBoard(boardWidth, boardHeight).length;

      expect(obtainedResult).toBe(expectedResult);
    });
  });
});

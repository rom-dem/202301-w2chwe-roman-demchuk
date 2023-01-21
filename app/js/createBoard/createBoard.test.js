import createBoard from "./createBoard.js";

describe("Given the function createBoard", () => {
  describe("When it receives width 2 and height 2", () => {
    test("Then it should join return an array of 2 x 2", () => {
      const boardWidth = 2;
      const boardHeight = 2;
      const expectedResult = [
        ["", ""],
        ["", ""],
      ];

      const obtainedResult = createBoard(boardWidth, boardHeight);

      expect(obtainedResult).toStrictEqual(expectedResult);
    });
  });
});

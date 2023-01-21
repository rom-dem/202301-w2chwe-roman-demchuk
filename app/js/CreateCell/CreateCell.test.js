import CreateCell from "./CreateCell";

describe("Given the class CreateCell", () => {
  describe("When it receives value 1 for positionX and value 2 for positionY", () => {
    test("Then is should return the value of the property positionX = 1 of the object cell", () => {
      const positionequis = 1;
      const positionY = 2;
      const cell = new CreateCell(positionequis, positionY);

      const expectedResult = 1;
      const obtainedResult = cell.positionX;

      expect(obtainedResult).toStrictEqual(expectedResult);
    });
  });

  describe("When it receives value 1 for positionX and value 2 for positionY", () => {
    test("Then is should return the value of the property positionY = 2 of the object cell", () => {
      const positionX = 1;
      const positionY = 2;
      const cell = new CreateCell(positionX, positionY);

      const expectedResult = 2;
      const obtainedResult = cell.positionY;

      expect(obtainedResult).toStrictEqual(expectedResult);
    });
  });

  describe("When it receives value 1 for positionX and value 2 for positionY", () => {
    test("Then is should return an object with the value of the property positionY: 2, positionX: 1 and isAlive: false", () => {
      const positionX = 1;
      const positionY = 2;

      const expectedResult = { isAlive: false, positionX: 1, positionY: 2 };
      const obtainedResult = new CreateCell(positionX, positionY);

      expect(obtainedResult).toEqual(expectedResult);
    });
  });
});

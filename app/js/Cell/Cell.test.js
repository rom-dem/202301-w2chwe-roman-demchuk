import Cell from "./Cell.js";

describe("Given the class Cell", () => {
  describe("When an object is created with it and receives no value", () => {
    test("Then is should return an object with a property isAlive that is undefined", () => {
      const cell = new Cell();

      const expectedResult = {
        isAlive: undefined,
      };
      const obtainedResult = cell;

      expect(obtainedResult).toMatchObject(expectedResult);
    });
  });

  describe("When an object is created with it and it gets it's method live applied", () => {
    test("Then is should return an object with a property isAlive that is true", () => {
      const cell = new Cell();
      cell.live();

      const expectedResult = {
        isAlive: true,
      };
      const obtainedResult = cell;

      expect(obtainedResult).toMatchObject(expectedResult);
    });
  });

  describe("When an object is created with it and it gets it's method die applied", () => {
    test("Then is should return an object with a property isAlive that is false", () => {
      const cell = new Cell();
      cell.die();

      const expectedResult = {
        isAlive: false,
      };
      const obtainedResult = cell;

      expect(obtainedResult).toMatchObject(expectedResult);
    });
  });
});

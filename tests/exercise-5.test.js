const fn = require("../src/exercise-5");

describe("Exercise 5", () => {
  it("should use forEach() method", () => {
    expect(fn.toString()).toMatch(/\bforEach\(/);
  });
  it("should return an array with only the id and title props", () => {
    expect(fn([432, 546, 7, 3412, 1231], (x) => x > 500)).toEqual([
      546, 3412, 1231,
    ]);
  });
  it("should return an empty array when array is empty", () => {
    expect(fn([])).toEqual([]);
  });
  it("should throw if no argument is given", () => {
    expect(() => fn()).toThrow();
  });
});

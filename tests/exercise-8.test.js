const fn = require("../src/exercise-8");

describe("Exercise 8", () => {
  it("should use forEach() method", () => {
    expect(fn.toString()).toMatch(/\bforEach\(/);
  });
  it("should return a flattened array", () => {
    expect(fn([[1, 3], [5], [[34], [44]], [[[432], 12], 4]])).toEqual([
      1,
      3,
      5,
      [34],
      [44],
      [[432], 12],
      4,
    ]);
  });
  it("should return an empty array when array is empty", () => {
    expect(fn([])).toEqual([]);
  });
  it("should throw if no argument is given", () => {
    expect(() => fn()).toThrow();
  });
});

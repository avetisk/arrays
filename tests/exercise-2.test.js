const fn = require("../src/exercise-2");

describe("Exercise 2", () => {
  it("should use forEach() method", () => {
    expect(fn.toString()).toMatch(/\bforEach\(/);
  });
  it("should return the total length of strings in the given array", () => {
    expect(fn(["yolo", "pasta", "bolos", "pouet"])).toBe(19);
  });
  it("should return 0 when array is filled with empty strings", () => {
    expect(fn(["", "", "", ""])).toBe(0);
  });
  it("should return 0 when array is empty", () => {
    expect(fn([])).toBe(0);
  });
  it("should throw if no argument is given", () => {
    expect(() => fn()).toThrow();
  });
});

const fn = require("../src/exercise-1");

describe("Exercise 1", () => {
  it("should use for() loop", () => {
    expect(fn.toString()).toMatch(/\bfor \(/);
  });
  it("should return the total length of strings in the given array", () => {
    expect(fn(["yolo", "pasta", "bolos", "pouet"])).toBe(19);
  });
  it("should return 0 when array is filled with empty strings", () => {
    expect(fn(["", "", "", ""])).toBe(0);
  });
  it("should return 0 when array is empty", () => {
    expect(fn([])).toEqual([]);
  });
  it("should throw if no argument is given", () => {
    expect(() => fn()).toThrow();
  });
});

const fn = require("../src/exercise-10");

const data = [
  {
    name: "New Releases",
    videos: [
      {
        id: 32,
        title: "Die Hard",
        boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
        uri: "http://api.netflix.com/catalog/titles/movies/32",
        rating: 4.0,
        bookmark: [],
      },
      {
        id: 549,
        title: "Bad Boys",
        boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
        uri: "http://api.netflix.com/catalog/titles/movies/32",
        rating: 5.0,
        bookmark: [{ id: 432534, time: 65876586 }],
      },
    ],
  },
  {
    name: "Dramas",
    videos: [
      {
        id: 4311,
        title: "The Chamber",
        boxart: "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
        uri: "http://api.netflix.com/catalog/titles/movies/32",
        rating: 4.0,
        bookmark: [],
      },
      {
        id: 990,
        title: "Fracture",
        boxart: "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
        uri: "http://api.netflix.com/catalog/titles/movies/32",
        rating: 5.0,
        bookmark: [{ id: 432534, time: 65876586 }],
      },
    ],
  },
];

describe("Exercise 10", () => {
  it("should use flat() method", () => {
    expect(fn.toString()).toMatch(/\bflat\(/);
  });
  it("should use map() method", () => {
    expect(fn.toString()).toMatch(/\bmap\(/);
  });
  it("should return an array with only the id prop", () => {
    expect(fn(data)).toEqual([32, 549, 4311, 990]);
  });
  it("should return an empty array when array is empty", () => {
    expect(fn([])).toEqual([]);
  });
  it("should throw if no argument is given", () => {
    expect(() => fn()).toThrow();
  });
});

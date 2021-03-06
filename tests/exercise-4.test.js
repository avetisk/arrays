const fn = require("../src/exercise-4");

const data = [
  {
    id: 70111470,
    title: "Die Hard",
    boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [4.0],
    bookmark: [],
  },
  {
    id: 654356453,
    title: "Bad Boys",
    boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [5.0],
    bookmark: [{ id: 432534, time: 65876586 }],
  },
  {
    id: 65432445,
    title: "The Chamber",
    boxart: "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [4.0],
    bookmark: [],
  },
  {
    id: 675465,
    title: "Fracture",
    boxart: "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [5.0],
    bookmark: [{ id: 432534, time: 65876586 }],
  },
];

describe("Exercise 4", () => {
  it("should use map() method", () => {
    expect(fn.toString()).toMatch(/\bmap\(/);
  });
  it("should return an array with only the id and title props", () => {
    expect(fn(data)).toEqual([
      {
        id: 70111470,
        title: "Die Hard",
      },
      {
        id: 654356453,
        title: "Bad Boys",
      },
      {
        id: 65432445,
        title: "The Chamber",
      },
      {
        id: 675465,
        title: "Fracture",
      },
    ]);
  });
  it("should return an empty array when array is empty", () => {
    expect(fn([])).toEqual([]);
  });
  it("should throw if no argument is given", () => {
    expect(() => fn()).toThrow();
  });
});

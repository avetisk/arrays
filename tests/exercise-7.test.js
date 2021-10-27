const fn = require("../src/exercise-7");

const data = [
  {
    id: 70111470,
    title: "Die Hard",
    boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    score: 4.0,
    bookmark: [],
  },
  {
    id: 654356453,
    title: "Bad Boys",
    boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    score: 5.0,
    bookmark: [{ id: 432534, time: 65876586 }],
  },
  {
    id: 65432445,
    title: "The Chamber",
    boxart: "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    score: 4.0,
    bookmark: [],
  },
  {
    id: 675465,
    title: "Fracture",
    boxart: "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    score: 5.0,
    bookmark: [{ id: 432534, time: 65876586 }],
  },
  {
    id: 4546535,
    title: "Evil Dead 3",
    boxart: "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    score: 4.1,
    bookmark: [{ id: 7432534234, time: 649903586 }],
  },
];

describe("Exercise 7", () => {
  it("should use filter() method", () => {
    expect(fn.toString()).toMatch(/\bfilter\(/);
  });
  it("should use map() method", () => {
    expect(fn.toString()).toMatch(/\bmap\(/);
  });
  it("should return an array with only the id and title props for movies having a score > 4", () => {
    expect(fn(data)).toEqual([
      {
        id: 654356453,
        title: "Bad Boys",
      },
      {
        id: 675465,
        title: "Fracture",
      },
      {
        id: 4546535,
        title: "Evil Dead 3",
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

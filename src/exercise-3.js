// Extract data as follows, using forEach:

// const data = [
//   {
//     id: 70111470,
//     title: "Die Hard",
//     boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
//     uri: "http://api.netflix.com/catalog/titles/movies/70111470",
//     rating: [4.0],
//     bookmark: [],
//   },
//   {
//     id: 654356453,
//     title: "Bad Boys",
//     boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
//     uri: "http://api.netflix.com/catalog/titles/movies/70111470",
//     rating: [5.0],
//     bookmark: [{ id: 432534, time: 65876586 }],
//   },
// ];

// fn(data) ===
//   [
//     { id: 70111470, title: "Die Hard" },
//     { id: 654356453, title: "Bad Boys" },
//   ];

// You must throw if no argument is given.

module.exports = (array) => {
  let wantedArray = [];

  if (!array) {
    throw new Error("Invalid argument");
  }

  array.forEach((element) => {
    wantedArray.push({ id: element.id, title: element.title });
  });
  return wantedArray;
};

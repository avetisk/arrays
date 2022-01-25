// Use a for loop to count the total length of all strings in the given array
// E.g: fn(["toto", "pouet"]) === 9
//
// You must throw if the no argument is given.

module.exports = (array) => {
  let totalLength = 0;

  if (!array) {
    throw new Error("Invalid argument");
  }

  for (let i = 0; i < array.length; i += 1) {
    totalLength += array[i].length;
  }

  return totalLength;
};

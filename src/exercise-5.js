// Use forEach to filter given array
// e.g fn([123, 540, 64, 19], (x) => x % 2) === [123, 19]

// If no argument given, throw.

module.exports = (array, functionToApply) => {
  let expectedArray = [];

  if (!array) {
    throw new Error("Invalid argument");
  }

  array.forEach((element) => {
    if (functionToApply(element)) {
      expectedArray.push(element);
    }
  });

  return expectedArray;
};

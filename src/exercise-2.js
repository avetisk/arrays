// Do the same as in exercise 1 but use .forEach() method instead

module.exports = (array) => {
  let totalLength = 0;

  if (!array) {
    throw new Error("Invalid argument");
  }

  array.forEach((element) => {
    totalLength += element.length;
  });

  return totalLength;
};

// Same as usual, but use .map() method.

module.exports = (array) => {
  let wantedArray = [];

  array.map((element) =>
    wantedArray.push({ id: element.id, title: element.title })
  );
  return wantedArray;
};

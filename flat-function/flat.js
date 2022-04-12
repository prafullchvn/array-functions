const flat = function (array, depth) {
  let copyOfArray = array.slice();
  let flattened;
  for (let level = 0; level < depth; level++) {
    flattened = [];
    for (let index = 0; index < copyOfArray.length; index++) {
      flattened = flattened.concat(copyOfArray[index]);
    }
    copyOfArray = flattened.slice();
  }

  return flattened;
};

console.log(flat([1, [2, [3, [4]]]], 2));
console.log(flat([1, [2]], 1));

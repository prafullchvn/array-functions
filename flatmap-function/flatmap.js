const flatMap = function (array, mapper) {
  let result = [];

  for (let index = 0; index < array.length; index++) {
    result = result.concat(mapper(array[index]));
  }

  return result;
};

const both = function (x) {
  return [x, !x];
};

console.log(flatMap([1, 2, 3, 4], both));

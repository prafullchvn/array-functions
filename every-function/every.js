const every = function (array, predicate) {
  for (let index = 0; index < array.length; index++) {
    if (!predicate(array[index])) {
      return false;
    }
  }
  return true;
};

const isOdd = function (num) {
  return num % 2 !== 0;
};

console.log(every([1, 3, 5, 5], isOdd));

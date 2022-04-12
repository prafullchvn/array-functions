const find = function (array, predicate) {
  for (let index = 0; index < array.length; index++) {
    if (predicate(array[index])) {
      return array[index];
    }
  }
};

const findFirstOdd = function (number) {
  return number % 2 === 1;
}

console.log(find([2, 4, 3, 9, 8], findFirstOdd));

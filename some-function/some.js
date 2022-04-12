const some = function (array, predicate) {
  for (let index = 0; index < array.length; index++) {
    if (predicate(array[index])) {
      return true;
    }
  }
};

const isEven = function (num) {
  return num % 2 === 0;
};

console.log(some([1, 2, 3, 4], isEven));

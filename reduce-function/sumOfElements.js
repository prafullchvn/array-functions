const reduce = require('./reduce.js').reduce;

const sumOfN = function (sum, element) {
  return sum + element;
};

const numbers = [1, 2, 3];

console.log(reduce(numbers, sumOfN));

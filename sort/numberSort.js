const sort = require('./sort.js').sort;

const ascending = function (value1, value2) {
  return value1 - value2;
};

console.log(sort([3, 5, 2, 1], ascending));
console.log(sort([3, 5, 5, 2, 1], ascending));

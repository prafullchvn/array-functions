const divisibleBy = function (divisor) {
  return function (dividend) {
    return dividend % divisor === 0;
  }
};

console.log([1, 2, 3].map(divisibleBy(2)));
console.log([1, 2, 3].map(divisibleBy(1.5)));
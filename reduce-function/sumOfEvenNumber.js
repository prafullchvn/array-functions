const sumIfEven = function (sum, num) {
  if (num % 2 === 0) {
    sum += num;
  }
  return sum;
}

console.log([1, 2, 5, 2, 4, 5, 8].reduce(sumIfEven, 0));
console.log([1, 5, 5].reduce(sumIfEven, 0));

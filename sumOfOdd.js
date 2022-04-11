const sumIfOdd = function (sum, num) {
  if (num % 2 !== 0) {
    sum += num;
  }
  return sum;
}

console.log([1, 2, 5, 2, 4, 5, 8].reduce(sumIfOdd, 0));

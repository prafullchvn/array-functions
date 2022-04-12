const fibonacciTermGenerator = function (first, second) {
  let a = first;
  let b = second;
  return function () {
    let c = a;
    a = b;
    b = a + c;
    return c;
  };
}

const fibo = fibonacciTermGenerator(0, 1);
console.log(Array(5).fill(1).map(fibo));

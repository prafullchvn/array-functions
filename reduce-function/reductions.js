const add = function (num1, num2) {
  return num1 + num2;
};

const mul = function (x, y) {
  return x * y;
};

const max = function (num1, num2) {
  return Math.max(num1, num2);
};

const addReduction = function (fnName, reductions, element) {
  let context = reductions[reductions.length - 1];
  if (reductions.length < 1) {
    reductions.push(element);
    return reductions;
  }
  const currentReduction = fnName(context, element);
  reductions.push(currentReduction);
  return reductions;
};

const reduction = function (reducer, elements, initialContext) {
  if (!initialContext) {
    initialContext = [];
  }
  return elements.reduce(function (context, element) {
    return addReduction(reducer, context, element);
  }, initialContext);
};

console.log(reduction(max, [1, 2, 3]));
console.log(reduction(max, [3, 2, 1]));
console.log(reduction(mul, [3, 2, 1], [2]));


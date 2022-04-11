const generateTableLine = function (multiplier, multiplicand) {
  const lhs = multiplier + ' x ' + multiplicand;
  const rhs = multiplier * (multiplicand);
  return lhs + ' = ' + rhs;
};

const multiply = function (element, index) {
  return generateTableLine(element, index + 1);
};

const multiplicationTable = function (num) {
  const arr = Array(10).fill(num);
  return arr.map(multiply).join('\n');
};

console.log(multiplicationTable(2, 10));
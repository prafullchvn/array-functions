const reduce = require('./reduce.js').reduce;

const putLetterInBack = function (context, letter) {
  return letter + context;
};

console.log(reduce('abc', putLetterInBack));

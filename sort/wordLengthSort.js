const sort = require('./sort.js').sort;

const wordLengthSort = function (string1, string2) {
  return string1.length - string2.length;
};

const wordLengthSortDescending = function (string1, string2) {
  return string2.length - string1.length;
};

console.log(sort(['abcd', 'abc', 'ab'], wordLengthSort))
console.log(sort(['abcd', 'abc', 'ab'], wordLengthSortDescending))

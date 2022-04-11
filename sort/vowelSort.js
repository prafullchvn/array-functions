const sort = require('./sort.js').sort;

const isVowel = function (letter) {
  return 'aeiou'.includes(letter.toLowerCase());
}

const vowelCount = function (text) {
  let count = 0;
  for (let index = 0; index < text.length; index++) {
    if (isVowel(text[index])) {
      count++;
    }
  }
  return count;
};

const vowelSort = function (string1, string2) {
  return vowelCount(string1) - vowelCount(string2);
};

const vowelSortDescending = function (string1, string2) {
  return vowelCount(string2) - vowelCount(string1);
};

console.log(sort(['abc', 'abcdef', 'adieou', 'abeo'], vowelSort));
console.log(sort(['abc', 'abcdef', 'adieou', 'abeo'], vowelSortDescending));

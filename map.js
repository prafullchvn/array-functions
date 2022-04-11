// strings

const map = function (list, mapper) {
  const mappedValues = [];

  for (let index = 0; index < list.length; index++) {
    mappedValues.push(mapper(list[index]));
  }

  return mappedValues;
};

const length = function (string) {
  return string.length;
};

const firstLetter = function (string) {
  return string[0];
};

const isVowel = function (letter) {
  return 'aeiou'.includes(letter.toLowerCase());
};

const vowelInString = function (string) {
  return string.split('').filter(isVowel).join('');
};

const vowelCount = function (string) {
  return vowelInString(string).length;
};

const countOfVowels = function (string) {
  let count = 0;

  for (let index = 0; index < string.length; index++) {
    count += isVowel(string[index]) ? 1 : 0;
  }

  return count;
};

const split = function (string) {
  return string.split('');
};

const strings = ['abcd', 'ads', 'sdfds', 'afasfd'];
// console.log('Length of string in arrays are', map(strings, length));
// console.log('First letter of each string are', map(strings, firstLetter));
// console.log('All vowels in each string', map(strings, vowelInString));
// console.log('Counts of vowels in each string are', map(strings, countOfVowels));
// console.log('Strings split into array', map(strings, split));

// numbers 

const cube = function (num) {
  return num ** 3;
}

const toBinary = function (num) {
  let binary = '', remainingNum = num;

  while (remainingNum > 0) {
    binary = remainingNum % 2 + binary;
    remainingNum = Math.floor(remainingNum / 2);
  }

  return binary;
};

const numbers = [1, 5, 2, 6, 9];
// console.log('Cubes of values in array is', map(numbers, cube));
// console.log('Numbers in binary are', map(numbers, toBinary));

// pattern 

const row = function (length) {
  return '*'.repeat(length);
};

const lengthOfRow = [1, 2, 3, 4, 5];
// console.log('Left aligned triangle is');
// console.log(map(lengthOfRow, row).join('\n'));

// other 

const typeOfValue = function (value) {
  return typeof value;
};

const values = [1, '1', 1.5, [1, 2], console.log];
// console.log(map(values, typeOfValue));

exports.map = map;

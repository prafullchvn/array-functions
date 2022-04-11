const invert = function (predicate) {
  return function (x) {
    return !predicate(x);
  };
};

const filter = function (list, predicate) {
  const filteredValue = [];

  for (let index = 0; index < list.length; index++) {
    if (predicate(list[index])) {
      filteredValue.push(list[index]);
    }
  }

  return filteredValue;
};

const students = [
  ['prafull', 20, 2001, 6],
  ['sai', 19, 2002, 5.5],
  ['ankamma', 19, 2002, 5.5],
  ['Prem', 20, 2001, 6],
  ['Abin', 20, 1999, 7]
];

const isVowel = function (letter) {
  return 'aeiou'.includes(letter.toLowerCase());
};

const vowelCount = function (string) {
  return string.split('').filter(isVowel).length;
};

const havingVowelMoreThan2 = function (record) {
  return vowelCount(record[0]) > 1;
}

const isStartingWithCapitalLetter = function (record) {
  return record[0][0] === record[0][0].toUpperCase();
};

const isStartingWithLowercaseLetter = invert(isStartingWithCapitalLetter);

console.log(filter(students, havingVowelMoreThan2));
console.log(filter(students, isStartingWithCapitalLetter));
console.log(filter(students, isStartingWithLowercaseLetter));

const numbers = [1, 26, 22, 35, 98, 23];

const isEven = function (num) {
  return num % 2 === 0;
};


const isOdd = invert(isEven);

console.log(filter(numbers, isEven));
console.log(filter(numbers, isOdd));

const reduce = require('./reduce.js').reduce;

const countFrequency = function (frequencies, element, index) {
  let groupIndex = frequencies.findIndex(function (group) {
    return group[0] === element;
  });

  if (groupIndex < 0) {
    groupIndex = frequencies.length;
    frequencies.push([element, 0]);
  }

  frequencies[groupIndex][1]++;
  return frequencies;
};

console.log(reduce([1, 2, 1, 2, 3, 4], countFrequency, []));

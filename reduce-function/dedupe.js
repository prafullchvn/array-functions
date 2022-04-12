const deepEqual = require('./deepEqual.js').deepEqual;

const isArrayEmpty = function (array) {
  return array.length === 0;
};

const dedupe = function (dedupedElements, element) {
  const lastElement = dedupedElements[dedupedElements.length - 1];

  if (isArrayEmpty(dedupedElements) || !deepEqual(lastElement, element)) {
    dedupedElements.push(element);
  }

  return dedupedElements;
};

console.log([1, 1, 2, 2, 3, 4, 4, 4, 4, 5].reduce(dedupe, []));

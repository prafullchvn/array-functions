const swap = require('./sort.js').swap;

const sort = function (list, comparator) {
  for (let index = 0; index < list.length - 1; index++) {
    let smallestValueIndex = index;
    for (let subIndex = index + 1; subIndex < list.length; subIndex++) {
      if (comparator(list[index], list[subIndex]) > 0) {
        smallestValueIndex = subIndex;
      }
      swap(list, smallestValueIndex, index);
    }
  }

  return list;
};

exports.sort = sort;

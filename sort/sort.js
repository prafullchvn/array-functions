const swap = function (array, from, to) {
  let temp = array[from];
  array[from] = array[to];
  array[to] = temp;
};

const sort = function (values, comparator) {
  for (let index = 0; index < values.length - 1; index++) {
    for (let subIndex = index + 1; subIndex < values.length; subIndex++) {
      if (comparator(values[index], values[subIndex]) > 0) {
        swap(values, index, subIndex);
      }
    }
  }
  return values;
};

exports.sort = sort;

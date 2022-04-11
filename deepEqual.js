const isArray = Array.isArray;

const areArrays = function (element1, element2) {
  return isArray(element1) && isArray(element2);
};

const deepEqual = function (element1, element2) {
  const stack = [[element1, element2]];
  while (stack.length > 0) {
    const pair = stack.pop();
    const arr1 = pair[0];
    const arr2 = pair[1];
    if (areArrays(arr1, arr2)) {
      if (arr1.length !== arr2.length) {
        return false;
      }
      for (let index = 0; index < arr1.length; index++) {
        stack.push([arr1[index], arr2[index]]);
      }
    }
    else if (arr1 !== arr2) {
      return false;
    }
  }
  return true;
};

exports.deepEqual = deepEqual;
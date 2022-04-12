const zipMultiple = function (arraysToZip, zippedArray, element, position) {
  const group = [element];

  for (let index = 0; index < arraysToZip.length; index++) {
    if (position < arraysToZip[index].length) {
      group.push(arraysToZip[index][position]);
    }
  }

  zippedArray.push(group);
  return zippedArray;
};

const zip = function (arrayToZip) {
  return function (zippedArray, element, index) {
    if (index < arrayToZip.length) {
      zippedArray.push([element, arrayToZip[index]]);
    }
    return zippedArray;
  }
};

const arr1 = [1, 2, 3, 5, 6];
const arr2 = [7, 8, 9];
// [[1,7],[2,8],[3,9]]
console.log(arr1.reduce(zip(arr2), []));

const arr3 = [3, 4, 6, 67]
console.log(arr2.reduce(function (zippedArray, element, position) {
  return zipMultiple([arr1, arr3], zippedArray, element, position)
}, []));



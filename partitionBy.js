const partitionBy = function (predicate, partitions, element) {
  const lastIndex = partitions.length - 1;
  const lastGroup = partitions[lastIndex];

  if (!lastGroup || predicate(lastGroup[0]) !== predicate(element)) {
    partitions.push([element]);
    return partitions;
  }

  partitions[lastIndex].push(element);
  return partitions;
};

const isEven = function (num) {
  return num % 2 === 0;
};

const identity = function (num) {
  return num;
};

console.log([1, 1, 1, 2, 3, 4, 6, 9, 10, 10, 12].reduce(function (partitions, element) {
  return partitionBy(isEven, partitions, element);
}, [])); // [[1,1],[2],[1]]


console.log([1, 1, 1, 2, 3, 4, 6, 9, 10, 10, 12].reduce(function (partitions, element) {
  return partitionBy(identity, partitions, element);
}, [])); // [[1,1],[2],[1]]
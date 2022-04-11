const partition = function (size, overlapSize, groups, element) {
  const lastGroup = groups[groups.length - 1];

  if (lastGroup.length === size) {
    const overlappingElements = lastGroup.slice(-overlapSize);
    overlappingElements.push(element);
    groups.push(overlappingElements);
    return groups;
  }

  lastGroup.push(element);
  return groups;
};

const partitionsBySize = function (array, size, overlapSize) {
  if (size === 0 || overlapSize > size || overlapSize === 0) {
    return [];
  }

  return array.reduce(function (groups, element) {
    return partition(size, overlapSize, groups, element);
  }, [[]]);
};

console.log(partitionsBySize([1, 2, 3, 5, 6], 3, 2));
console.log(partitionsBySize([1, 2, 3, 5, 6, 2, 3, 5, 5], 5, 2));
console.log(partitionsBySize([1, 2, 3, 5, 6], 2, 3));
console.log(partitionsBySize([1, 2, 3, 5, 6], 2, 0));
console.log(partitionsBySize([1, 2, 3, 5, 6], 0, 2));

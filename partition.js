const partition = function (size, groups, element) {
  const lastGroup = groups[groups.length - 1];

  if (!lastGroup || lastGroup.length === size) {
    groups.push([element]);
    return groups;
  }

  lastGroup.push(element);
  return groups;
};

const partitionsBySize = function (array, size) {
  if (size === 0) {
    return [];
  }

  return array.reduce(function (groups, element) {
    return partition(size, groups, element);
  }, []);
};

console.log(partitionsBySize([1, 2, 3, 5, 6], 3));
console.log(partitionsBySize([1, 2, 3, 5, 6], 0));
// console.log(.reduce(partition(0), []));

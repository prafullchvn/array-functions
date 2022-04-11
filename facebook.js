const putInFriendList = function (groups, record) {
  const friendGroup = groups.find(function (group) {
    return group[0] === record[0];
  });
  if (friendGroup === undefined) {
    groups.push([record[0], [record[1]]]);
    return groups;
  }
  friendGroup[1].push(record[1]);
  return groups;
};

const friendList = function (list) {
  return list.reduce(putInFriendList, []);
};

console.log(friendList([
  ['a', 'b'],
  ['a', 'c'],
  ['a', 'd'],
  ['b', 'd']
]));
console.log(friendList([]));

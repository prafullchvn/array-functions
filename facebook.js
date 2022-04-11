const findGroup = function (groups, value) {
  return groups.find(function (group) {
    return group[0] === value;
  });
};

const associateFriend = function (groups, friendGroup, user, friend) {
  if (friendGroup === undefined) {
    groups.push([user, [friend]]);
    return;
  }

  friendGroup[1].push(friend);
};

const putInFriendList = function (groups, pairOfFriend) {
  let friendGroup = findGroup(groups, pairOfFriend[0]);
  associateFriend(groups, friendGroup, pairOfFriend[0], pairOfFriend[1]);

  friendGroup = findGroup(groups, pairOfFriend[1]);
  associateFriend(groups, friendGroup, pairOfFriend[1], pairOfFriend[0]);

  return groups;
};

const friendList = function (list) {
  return list.reduce(putInFriendList, []);
};

console.log(friendList([
  ['a', 'b'],
  ['a', 'c'],
  ['a', 'd'],
  ['b', 'd'],
  ['c', 'b']
]));
console.log(friendList([]));

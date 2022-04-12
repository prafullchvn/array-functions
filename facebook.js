const findUserGroup = function (groups, user) {
  return groups.find(function (group) {
    return group[0] === user;
  });
};

const associateFriend = function (groups, friendGroup, user, friend) {
  if (friendGroup === undefined) {
    groups.push([user, [friend]]);
    return;
  }

  friendGroup[1].push(friend);
};

const updateFriendList = function (groups, user, friend) {
  let friendGroup = findUserGroup(groups, user);
  associateFriend(groups, friendGroup, user, friend);
};

const putInFriendList = function (groups, pairOfFriend) {
  const user1 = pairOfFriend[0];
  const user2 = pairOfFriend[1];

  updateFriendList(groups, user1, user2);
  updateFriendList(groups, user2, user1);

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

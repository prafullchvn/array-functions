const sort = require('./sort.js').sort;

const users = [
  ['Prafull', 20, 'Nashik', 'MH'],
  ['Dileep', 20, 'Abc', 'AP'],
  ['Vivek', 22, 'Dehradun', 'UK'],
  ['Sai', 19, 'Def', 'AP'],
  ['Govinda', 21, 'Jkl', 'AP'],
  ['Sakshi', 20, 'Karad', 'MH']
];

const basedOnAge = function (user1, user2) {
  return user1[1] - user2[1];
};

const basedOnAgeName = function (user1, user2) {
  if ((user1[1] - user2[1]) !== 0) {
    return user1[1] - user2[1];
  }

  return user1[0].length - user2[0].length;
};

console.log(sort(users, basedOnAgeName));

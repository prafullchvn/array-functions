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

const difference = function (num1, num2) {
  return num1 - num2;
};

const differenceInAge = function (user1, user2) {
  return difference(user1[1], user2[1]);
};

const differenceInNameLength = function (user1, user2) {
  return difference(user1, user2);
};

const basedOnAgeName = function (user1, user2) {
  const ageDifference = differenceInAge(user1, user2);
  if ((ageDifference) !== 0) {
    return ageDifference;
  }

  return differenceInNameLength(user1, user2);
};

console.log('Based on Age:');
console.log(sort(users, basedOnAge));

console.log('Based on Age and then length of Name :');
console.log(sort(users, basedOnAgeName));

const reduce = function (list, reducer, context) {
  let startIndex = 0;
  if (!context) {
    context = list[0];
    startIndex = 1;
  }

  for (let index = startIndex; index < list.length; index++) {
    context = reducer(context, list[index], index);
  }

  return context;
};

exports.reduce = reduce;

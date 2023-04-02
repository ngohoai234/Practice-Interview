// Write a function called stringifyNumbers which takes in an object and finds all of the values which are numbers and converts them to strings. Recursion would be a great way to solve.

// base case: is not object
// loop keys
//  if object and not array
//      func(obj[key])
//  if array
//      loop items
//               func()
//  if number
//      parse string
// obj = {
//     "num": 1,
//     "test": [],
//     "data": {
//       "val": 4,
//       "info": {
//         "isRight": True,
//         "random": 66
//       }
//     }
//   }

const stringifyNumbers = (obj) => {
  Object.keys(obj).forEach((key) => {
    const data = obj[key];
    if (Array.isArray(data)) {
      for (const item of data) {
        stringifyNumbers(item);
      }
    } else if (typeof data === 'object') {
      stringifyNumbers(data);
    } else if (typeof data === 'number') {
      obj[key] = String(data);
    }
  });
  return obj;
};

console.log(
  stringifyNumbers({
    num: 1,
    test: [],
    data: {
      val: 4,
      info: {
        isRight: true,
        random: 66,
      },
    },
  })
);

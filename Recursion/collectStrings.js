// Write a function called collectStrings which accepts an object and returns an array of all the values in the object that have a typeof string.

// base case : not object

const collectStrings = (obj) => {
  const result = [];

  Object.keys(obj).forEach((key) => {
    if (typeof obj[key] === 'string') {
      result.push(obj[key]);
    } else if (typeof obj[key] === 'object') {
      result.push(...collectStrings(obj[key]));
    }
  });
  return result;
};

console.log(
  collectStrings({
    stuff: 'foo',
    data: {
      val: {
        thing: {
          info: 'bar',
          moreInfo: {
            evenMoreInfo: {
              weMadeIt: 'baz',
            },
          },
        },
      },
    },
  })
);

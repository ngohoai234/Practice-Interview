// flatten
// Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.

// flatten([1, 2, 3, [4, 5]]) # [1, 2, 3, 4, 5]

// base case is not array

const flatten = (arr) => {
  if (!Array.isArray(arr)) {
    return arr;
  }
  const result = [];
  for (const item of arr) {
    if (Array.isArray(item)) {
      result.push(...flatten(item));
    } else {
      result.push(item);
    }
  }
  return result;
};

console.log(flatten([1, 2, 3, 4, [5, 6, [7, 8]]]));

// Write a recursive function called nestedEvenSum. Return the sum of all even numbers in an object which may contain nested objects.
// base case : is not object

// if is not object
//  return 0
// else loop key (1)
//  if key === object
//        (1)
//  else
//      plus
// obj1 = {
//   outer: 2,
//   obj: {
//     inner: 2,
//     otherObj: {
//       superInner: 2,
//       notANumber: True,
//       alsoNotANumber: 'yup',
//     },
//   },
// };
// nestedEvenSum(obj1) # 6

const nestedEvenSum = (obj) => {
  if (typeof obj !== 'object') {
    return obj;
  }
  let num = 0;
  Object.keys(obj).forEach((item) => {
    if (typeof obj[item] !== 'object' && typeof obj[item] === 'number') {
      num += obj[item];
    } else if (typeof obj[item] === 'object') {
      num += nestedEvenSum(obj[item]);
    }
  });
  return num;
};

console.log(
  nestedEvenSum({
    a: 2,
    b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
    c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
    d: 1,
    e: { e: { e: 2 }, ee: 'car' },
  })
);

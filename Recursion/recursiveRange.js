// recursiveRange
// Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function.
// recursiveRange(6) # 21

// recursiveRange(10) # 55

// n = 6
// f(n) = 6 + 5 + 4 + 3 +2 + 1
// f(n) = n + f( n - 1)

const recursiveRange = (num) => {
  if (num <= 1) {
    return 1;
  }
  return num + recursiveRange(num - 1);
};

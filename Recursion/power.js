// base = 2, exp = 4
// output: 2 * 2 * 2 * 2

// x^n = x * x ^ n - 1
// base case = 1
const power = (base, exp) => {
  // base case
  if (exp === 0) {
    return 1;
  }
  return base * power(base, exp - 1);
};

console.log(power(-1, 4));

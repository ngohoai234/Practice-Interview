// 4 != 24
// f(n) = 4 * 3 * 2 * 1
// f(n) = n * f( n - 1 )

const factorial = (n) => {
  if (n === 0) {
    return 1;
  }
  return n * (n - 1);
};

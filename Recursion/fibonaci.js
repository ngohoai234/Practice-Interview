// fib(4) # 3

// f(n) = f(n - 1) + f( n - 2)
// f(n - 1) = f(n - 2) + f( n - 3)

const fib = (num) => {
  if (num <= 0) {
    return 0;
  }
  if (num === 1) {
    return 1;
  }
  return fib(num - 1) + fib(num - 2);
};

console.log(fib(4));

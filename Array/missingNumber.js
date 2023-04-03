const missingNumber = (arr) => {
  const n = arr.length;

  return (n * (n + 1)) / 2 - arr.reduce((sum, n, idx) => (sum += idx), 0);
};

console.log(missingNumber([1, 2, 3, 4]));

// a = 56 , b = 42
// Euclid's algorithm :
// step 1 = 56 : 42 = 14 remainder
// step 2 = 42 : 14 = 0 remainder

// gcd(a, 0) = a
// formula : (b, a mod b)

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

console.log(gcd(42, 56));

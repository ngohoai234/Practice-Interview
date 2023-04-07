// palindrome has the same forwards and backwards
// permutation : has the same orders

// input: aaaabbbbccccdddd

// step 1: count frequently characters

// step 2: loop keys to check if has more than one character which has odd count return false

// step 3 : return true
const getFrequentlyCharacters = (str) => {
  const obj = {};
  for (const character of str) {
    obj[character] = (obj[character] || 0) + 1;
  }

  return obj;
};

const checkPalindromePermutation = (str) => {
  const f = getFrequentlyCharacters(str);
  let countEven = 0;

  const keys = Object.keys(f);
  for (const key of keys) {
    if (f[key] % 2 !== 0) {
      countEven++;
    }
    if (countEven > 1) {
      return false;
    }
  }
  return true;
};

console.log(checkPalindromePermutation('abac'));

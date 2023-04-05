// using hash to store frequently characters A and B

// step 1: convert into key : frequently characters a,

// step 2: loop each key in a and check if it is smaller than zero return false
// step 3 : end the loop return true

const getKeysLength = (a) => {
  const keys = {};
  for (let i = 0; i < a.length; i++) {
    if (keys[a[i]]) {
      keys[a[i]]++;
    } else {
      keys[a[i]] = 1;
    }
  }
  return keys;
};
const permutation = (a, b) => {
  const frequentlyObj = getKeysLength(a);

  for (const character of b) {
    const frequently = Number(frequentlyObj[character]);
    frequentlyObj[character] = frequently - 1;

    if (frequentlyObj[character] < 0) {
      return false;
    }
  }
  return true;
};

console.log(permutation('ab', 'eidboaoo'));

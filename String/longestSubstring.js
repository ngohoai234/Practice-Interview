const getLongestSubstring = (str) => {
  let left = 0;
  const map = {};
  let max = 0;

  for (let right = 0; right < str.length; right++) {
    const character = str[right];
    if (map[character] !== undefined && map[character] >= left) {
      left = map[character] + 1;
    }
    max = Math.max(max, right - left + 1);
    map[character] = right;
  }
  return max;
};

console.log(getLongestSubstring('aabc'));

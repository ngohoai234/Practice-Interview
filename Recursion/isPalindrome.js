// input = 'awesome'

// base case  input.length <= 1 return true
//  if arr[0] !== arr[arr.length * 1]
//      return false
//  f(arr.slice(1, arr.length - 1))

const isPalindrome = (str) => {
  const n = str.length;
  if (n <= 1) {
    return true;
  }
  if (str[0] !== str[n - 1]) {
    return false;
  }
  return isPalindrome(str.slice(1, n - 1));
};

console.log(isPalindrome('tacocat'));

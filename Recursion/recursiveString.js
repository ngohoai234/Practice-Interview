// reverse('python') # 'nohtyp'
// Write a recursive function called reverse which accepts a string and returns a new string in reverse.

// f(n) = n + f(n - 1)

// f(n - 1) = n - 1 + f(n - 2)

const reverse = (str) => {
  if (str.length <= 0) {
    return str;
  }
  return str[str.length - 1] + reverse(str.slice(0, str.length - 1));
};

console.log(reverse('python'));

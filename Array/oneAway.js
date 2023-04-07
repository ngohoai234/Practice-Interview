// One Away: There are three types of edits that can be performed on strings: insert a character,
// remove a character, or replace a character. Given two strings, write a function to check if they are
// one edit (or zero edits) away.

// step 1 : check if the length of two strings is different more than 1 => return false
// step 2 : loop i, j < a.length and b.length
// step 3: compare current character at index i, j
//  step 3.1 : if current diff
//      step 3.1.1: if a.length < b.length => j++
//      step 3.1.2: if a.length > b.length => i++
//      step 3.3.3: else i++ ,j++
//  step: 3.2: equal => i++, j++

const isOneEdit = (a, b) => {
  const l_a = a.length;
  const l_b = b.length;
  let i = 0,
    j = 0,
    edits = 0;
  if (Math.abs(l_a - l_b) > 1) {
    return false;
  }
  while (i < l_a && j < l_b) {
    debugger;
    if (a[i] !== b[j]) {
      edits++;
      if (l_a < l_b) {
        j++;
      } else if (l_a > l_b) {
        i++;
      } else {
        i++;
        j++;
      }
    } else {
      i++;
      j++;
    }
  }
  return edits <= 1;
};

console.log(isOneEdit('abc', 'bbc'));

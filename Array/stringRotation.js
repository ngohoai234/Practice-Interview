// String Rotation:Assumeyou have a method isSubstringwhich checks if oneword is a substring
// of another. Given two strings, sl and s2, write code to check if s2 is a rotation of sl using only one
// call to isSubstring (e.g., "waterbottle" is a rotation of"erbottlewat").

// hint : forward -> backward string
// step 1 : start from 0
// step 2 : check idx -> backward string -> equal s2 return true

const rotateString = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }
  if (str1 === str2) {
    return true;
  }
  for (let i = 1; i < str1.length; i++) {
    const shiftString = str1.slice(i) + str1.slice(0, i);

    if (shiftString === str2) {
      return true;
    }
  }
  return false;
};

console.log(rotateString('abcde', 'bcdea'));

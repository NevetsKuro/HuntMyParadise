function isSubstring(str1, str2) {
  if (str2.length <= str1.length) {
    index = 0;
    for (let i = 0; i < str1.length; i++) {
      // console.log(str1[i], str2[index]);
      if (str1[i] != str2[index]) {
        index = 0;
      } else {
        index++;
      }
      if (index > str2.length - 1) {
        return true;
      }
      s;
    }
    return false;
  }
  return false;
}

// 3 fails
console.log(isSubstring("madam", "madd"));
console.log(isSubstring("madam", "mam"));
console.log(isSubstring("madam", "madama"));
// 5 passes
console.log(isSubstring("madam", "mad"));
console.log(isSubstring("madam", "madam"));
console.log(isSubstring("madam", "dam"));
console.log(isSubstring("madam", "ada"));
console.log(isSubstring("madam", "m"));

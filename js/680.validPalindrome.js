/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
  const n = s.length;

  const inner = (from, to) => {
    while (from < to) {
      if (s[from] !== s[to]) return false;
      from++;
      to--;
    }
    return true;
  };

  for (let i = 0; i < Math.floor(n / 2); i++) {
    let l = i;
    let r = n - i - 1;

    if (s[l] !== s[r]) {
      return inner(l + 1, r) || inner(l, r - 1);
    }
  }
  return true;
};

// best sol from web
// var validPalindrome = function(s) {
//   var start = -1;
//   var end = s.length;
//   while (++start < --end) {
//     if (s[start] !== s[end])
//       return isPalindrome(start - 1, end, s) || isPalindrome(start, end + 1, s);
//   }
//   return true;
//   function isPalindrome(start, end, s) {
//     while (++start < --end) {
//       if (s[start] !== s[end]) return false;
//     }
//     return true;
//   }
// };

console.log(validPalindrome('a')); // true

console.log(validPalindrome('ab')); // true

console.log(validPalindrome('aba')); // true

console.log(validPalindrome('abca')); // true

console.log(validPalindrome('abceba')); // true
console.log(validPalindrome('abceba')); // true
console.log(validPalindrome('aebcba')); // true
console.log(validPalindrome('eabcba')); // true

console.log(validPalindrome('eabba')); // true
console.log(validPalindrome('abbae')); // true
console.log(validPalindrome('abbea')); // true
console.log(validPalindrome('aebba')); // true

console.log(validPalindrome('cupxpucu')); // true

console.log('==========');

console.log(validPalindrome('abcea')); // false
console.log(validPalindrome('abbbc')); // false
console.log(validPalindrome('adbec')); // false
console.log(validPalindrome('abcab')); // false

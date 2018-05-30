/**
 * @param {string} s
 * @return {number}
 */

//brute force
var countSubstrings = function(s) {
  const n = s.length;
  const checked = {};

  var isPalindrome = function(from, to) {
    if (from === to) return true;
    if (to - from === 2) return s[from] === s[to];

    const n = Math.ceil((to - from) / 2);
    for (let i = 0; i < n; i++) {
      if (s[from + i] !== s[to - i]) return false;
    }

    return true;
  };

  const helper = i => {
    if (i === 0) return 1;
    let ret = helper(i - 1);

    for (let j = i; j >= 0; j--) {
      // console.log('helper', j, i, isPalindrome(j, i), s.substring(j, i + 1));
      if (isPalindrome(j, i)) ret++;
    }
    return ret;
  };

  return helper(n - 1);
};

// best sol from web
// var countSubstrings = function(s) {
//   let cnt = 0;

//   for (let i = 0; i < s.length; i++) {
//     cnt += expand(i, i) + expand(i, i + 1);
//   }

//   return cnt;

//   function expand(i, j) {
//     let count = 0;
//     while (i >= 0 && j < s.length && s[i] === s[j]) {
//       i--;
//       j++;
//       count++;
//     }
//     return count;
//   }
// };

console.log(countSubstrings('a')); // 1

console.log(countSubstrings('aa')); // 3

console.log(countSubstrings('aaa')); // 6

console.log(countSubstrings('ab')); // 2

console.log(countSubstrings('abc')); // 3

console.log(countSubstrings('aba')); // 4

console.log(countSubstrings('abac')); // 5

console.log(countSubstrings('caba')); // 5

console.log(countSubstrings('abcba')); // 7

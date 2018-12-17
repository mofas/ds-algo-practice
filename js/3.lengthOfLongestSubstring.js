/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let from = 0;
  let to = 0;
  let ret = '';
  let current = '';

  const n = s.length;

  if (n === 0) return 0;
  if (n == 1) return 1;

  while (to < n) {
    // console.log('loop', to, ret, current);

    const e = s[to];
    const repeatedNum = current.indexOf(e);
    if (repeatedNum < 0) {
      current += e;
    } else {
      from += repeatedNum + 1;
      current = current.substring(repeatedNum + 1, current.length) + e;
    }
    if (current.length > ret.length) ret = current;

    to++;
  }

  // console.log(ret);
  return ret.length;
};

// best sol from web
// var lengthOfLongestSubstring = function(s) {
//   if (s === null) {
//     return 0;
//   }
//   if (s.length <= 1) {
//     return s.length;
//   }

//   let longest = 1;
//   let i = 0;
//   let j = 1;

//   while (j < s.length) {
//     if (s.slice(i, j).indexOf(s.charAt(j)) >= 0) {
//       i += s.slice(i, j).indexOf(s.charAt(j)) + 1;
//     } else {
//       longest = Math.max(j - i + 1, longest);
//     }

//     j++;
//   }

//   return longest;
// };

console.log(lengthOfLongestSubstring('abcabcbb'));
// abc

console.log(lengthOfLongestSubstring('bbbbb'));
// b

console.log(lengthOfLongestSubstring('pwwkew'));
// wke

console.log(lengthOfLongestSubstring('cdd'));
// cd

console.log(lengthOfLongestSubstring('aab'));
// ab

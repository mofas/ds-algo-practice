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
/**
 * @param {string} s
 * @return {number}
 */

// 96 ms, faster than 88.64%
// 37.9 MB, less than 85.36%
var lengthOfLongestSubstring = function(s) {
  const n = s.length;
  if (n < 2) return n;

  const hash = new Set();
  let from = 0;
  let max = 0;

  for (let i = 0; i < n; i++) {
    const ch = s[i];
    if (hash.has(ch)) {
      max = Math.max(max, i - from);
      while (hash.has(ch)) {
        hash.delete(s[from]);
        from++;
      }
    }
    hash.add(ch);
  }
  max = Math.max(max, n - from);

  return max;
};

// 72 ms
// var lengthOfLongestSubstring = function(s) {
//   let res = 0, start = 0;
//   for (let i = 0; i < s.length; i++) {
//       const index = s.indexOf(s[i], start);
//       if (index > -1 && index < i) {
//           start = index + 1;
//       }
//       res = Math.max(res, index - start + 1);
//   }
//   return res;
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

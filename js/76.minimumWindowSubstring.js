/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
// https://leetcode.com/problems/minimum-window-substring/discuss/26808/Here-is-a-10-line-template-that-can-solve-most-'substring'-problems
// Runtime: 84 ms, faster than 86.84%
// Memory Usage: 36 MB, less than 92.98%
var minWindow = function(s, t) {
  const n = s.length;
  const need = {};
  for (const ch of t) {
    need[ch] = need[ch] ? need[ch] + 1 : 1;
  }

  let counter = t.length;
  let begin = 0;
  let end = 0;
  let minVal = Number.MAX_SAFE_INTEGER;
  let head = 0;
  while (end < n) {
    if (need[s[end]] != null) {
      need[s[end]] -= 1;
      if (need[s[end]] >= 0) counter--;
    }
    end++;
    while (counter == 0) {
      if (end - begin < minVal) {
        minVal = end - begin;
        head = begin;
      }
      // make it invalid
      if (need[s[begin]] != null) {
        need[s[begin]] += 1;
        if (need[s[begin]] > 0) counter += 1;
      }
      begin++;
    }
  }

  return minVal === Number.MAX_SAFE_INTEGER
    ? ''
    : s.substring(head, head + minVal);
};

console.log(minWindow('ADOBECODEBANC', 'ABC'));
// 'BANC'

console.log(minWindow('A', 'AA'));
// ''

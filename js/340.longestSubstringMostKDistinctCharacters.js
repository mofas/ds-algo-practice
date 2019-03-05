/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
// 64ms (99.01%) 35.1MB(100.00%)
var lengthOfLongestSubstringKDistinct = function(s, k) {
  let from = 0;
  let diffentCh = 0;
  const hash = new Array(128).fill(0);

  let max = 0;
  for (let i = 0; i < s.length; i++) {
    const idx = s.charCodeAt(i);
    // console.log('idx', idx);
    if (hash[idx] === 0) {
      diffentCh++;
    }

    hash[idx]++;

    if (diffentCh <= k) {
      max = Math.max(max, i - from + 1);
    } else {
      while (diffentCh > k) {
        const idx = s.charCodeAt(from);
        // console.log('removed', s[from], hash[idx]);
        hash[idx]--;
        if (hash[idx] === 0) {
          diffentCh--;
        }
        from++;
      }
    }
    // console.log('hash', hash);
  }
  return max;
};

console.log(lengthOfLongestSubstringKDistinct('eceba', 2));
// 3

console.log(lengthOfLongestSubstringKDistinct('aa', 1));
// 2

console.log(
  lengthOfLongestSubstringKDistinct(
    'a@b$5!a8alskj234jasdf*()@$&%&#FJAvjjdaurNNMa8ASDF-0321jf?>{}L:fh',
    10
  )
);
// 14

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

// 64ms, beat 60%
var longestSubstring = function(s, k) {
  const calculateHash = s => {
    const initHash = {};
    for (const key of s) {
      initHash[key] = initHash[key] || 0;
      initHash[key]++;
    }
    return initHash;
  };
  const helper = s => {
    const hash = calculateHash(s);
    let max = 0;
    for (const key in hash) {
      if (hash[key] < k) {
        let newCands = s.split(key).filter(d => d.length >= k);
        for (const cand of newCands) {
          max = Math.max(max, helper(cand));
        }
        return max;
      }
    }
    return s.length;
  };
  return helper(s);
};

// best sol
//

console.log(longestSubstring('aaabb', 3));
// 3

console.log(longestSubstring('ababbc', 2));
// 5

console.log(longestSubstring('ababacb', 3));
// 0

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

// 84ms, beat 16.67%
var longestSubstring = function(s, k) {
  const len = s.length;
  let from = 0;
  let to = len - 1;

  const calculateHash = s => {
    const initHash = {};
    for (const key of s) {
      initHash[key] = initHash[key] || 0;
      initHash[key]++;
    }
    return initHash;
  };

  const isValidSubstring = hash => {
    for (const key in hash) {
      if (hash[key] > 0 && hash[key] < k) return false;
    }
    return true;
  };

  const helper = s => {
    const hash = calculateHash(s);
    if (isValidSubstring(hash)) return s.length;

    // find which key is not good!
    let bads = [];
    let keeps = [];
    for (const key in hash) {
      if (hash[key] < k) bads.push(key);
      else {
        keeps.push(key);
      }
    }
    if (keeps.length === 0) return 0;
    let cands = [s];
    let next = [];

    // console.log('bad', s, bads);

    for (const c of bads) {
      for (const cand of cands) {
        let newCands = cand.split(c).filter(d => d.length >= k);
        next = next.concat(newCands);
      }
      cands = next;
      next = [];
    }

    let max = 0;
    for (const cand of cands) {
      max = Math.max(max, helper(cand));
    }
    return max;
  };
  return helper(s);
};

console.log(longestSubstring('aaabb', 3));
// 3

console.log(longestSubstring('ababbc', 2));
// 5

console.log(longestSubstring('ababacb', 3));
// 0

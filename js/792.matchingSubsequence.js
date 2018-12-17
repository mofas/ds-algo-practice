/**
 * @param {string} S
 * @param {string[]} words
 * @return {number}
 */

// half brute force
var numMatchingSubseq = function(S, words) {
  const n = words.length;
  const Sn = S.length;
  const cache = {};

  for (let i = 0; i < Sn; i++) {
    const v = S.charAt(i);
    cache[v] = cache[v] || [];
    cache[v].push(i);
  }

  const helper = word => {
    const ws = word.length;
    let current = -1;
    let scan = 0;
    while (scan < ws) {
      const v = word.charAt(scan);
      const seq = cache[v];
      if (!seq) return false;
      let find = false;
      for (let j = 0; j < seq.length; j++) {
        if (seq[j] > current) {
          current = seq[j];
          find = true;
          break;
        }
      }
      if (find) {
        scan++;
      } else {
        return false;
      }
    }
    return true;
  };

  let ret = 0;

  // console.log(helper('aa'));
  // console.log(helper('abcde'));
  for (let i = 0; i < n; i++) {
    if (helper(words[i])) ret++;
  }

  return ret;
};

// best sol
// var numMatchingSubseq = function(S, words) {
//   return words.filter(function(word) {
//       var offset = 0;
//       for (var i = 0; i < word.length; ++i) {
//           offset = S.indexOf(word.charAt(i), offset);
//           if (offset === -1) return false;
//           offset++;
//       }
//       return true;
//   }).length;
// };

console.log(numMatchingSubseq('abcde', ['a', 'bb', 'acd', 'ace'])); // 3

console.log(numMatchingSubseq('aabbababa', ['aab', 'ababa', 'abbbbb'])); // 2

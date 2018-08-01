/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

// recursive DP
// 60 ms
var wordBreak = function(s, wordDict) {
  const n = s.length;
  const cache = new Array(n + 1).fill(null);
  const helper = i => {
    if (i === n) return true;
    if (cache[i] != null) return cache[i];
    for (const word of wordDict) {
      if (s.indexOf(word, i) === i && helper(i + word.length)) {
        cache[i] = true;
        return true;
      }
    }
    cache[i] = false;
    return false;
  };

  let ret = helper(0);
  // console.log(cache);

  return ret;
};

// iterative DP
// 60 ms
var wordBreak = function(s, wordDict) {
  const n = s.length;
  const dp = new Array(n + 1).fill(false);
  dp[0] = true;

  for (let i = 0; i <= n; i++) {
    if (dp[i]) {
      for (const word of wordDict) {
        if (s.indexOf(word, i) === i) {
          dp[i + word.length] = true;
        }
      }
    }
  }
  // console.log(dp);
  return dp[n];
};

console.log(wordBreak('leetcode', ['leet', 'code']));
// true

console.log(wordBreak('applepenapple', ['apple', 'pen']));
// true

console.log(wordBreak('applepenapple', ['apple', 'pen']));
// true

console.log(
  wordBreak(
    'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab',
    [
      'a',
      'aa',
      'aaa',
      'aaaa',
      'aaaaa',
      'aaaaaa',
      'aaaaaaa',
      'aaaaaaaa',
      'aaaaaaaaa',
      'aaaaaaaaaa'
    ]
  )
);
// false

console.log(wordBreak('catsandog', ['cats', 'dog', 'sand', 'and', 'cat']));
// false

/**
 * @param {string} s
 * @return {number}
 */

// recursive DP
// 172ms
var longestPalindromeSubseq = function(s) {
  const n = s.length;
  const cache = new Array(n).fill(0).map(_ => new Array(n).fill(-1));

  const helper = (from, to) => {
    // console.log(from, to);
    if (from === to) return 1;
    if (from > to) return 0;
    if (cache[from][to] > 0) return cache[from][to];
    if (s[from] === s[to]) {
      let ret = 2 + helper(from + 1, to - 1);
      cache[from][to] = ret;
      return ret;
    } else {
      let ret = Math.max(helper(from + 1, to), helper(from, to - 1));
      cache[from][to] = ret;
      return ret;
    }
  };

  return helper(0, n - 1);
};

// iterative DP
// 236 ms
var longestPalindromeSubseq = function(s) {
  const n = s.length;
  const dp = new Array(n).fill(0).map(_ => new Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    dp[i][i] = 1;
  }
  for (let k = 1; k < n; k++) {
    for (let from = 0; from < n - k; from++) {
      let to = from + k;
      if (s[from] === s[to]) dp[from][to] = 2 + dp[from + 1][to - 1];
      else {
        dp[from][to] = Math.max(dp[from + 1][to], dp[from][to - 1]);
      }
      // console.log('==', k, from, to, dp[from][to]);
    }
  }
  // console.log(dp);
  return dp[0][n - 1];
};

// best sol from web
// 112ms
// var longestPalindromeSubseq = function(s) {
//   if (!s) return 0;
//   if (s.length === 1) return 1;

//   const n = s.length - 1;
//   let dp = [];

//   for (let i = n; i >= 0; i--) {
//     dp[i] = 1;
//     let roundLongestVal = 0;
//     for (let j = i + 1; j <= n; j++) {
//       let max_val;

//       if (s[i] === s[j]) max_val = 2 + roundLongestVal;
//       else max_val = Math.max(dp[j - 1], dp[j]);
//       // need to record the previous longest value;
//       roundLongestVal = dp[j];
//       dp[j] = max_val;
//     }
//   }

//   return dp[n];
// };

console.log(longestPalindromeSubseq('b'));
// 1

console.log(longestPalindromeSubseq('bb'));
// 2

console.log(longestPalindromeSubseq('cbbd'));
// 2

console.log(longestPalindromeSubseq('bbbab'));
// 4

console.log(longestPalindromeSubseq('oaocmoefo'));
// 5 oo(cm)oo

console.log(
  longestPalindromeSubseq(
    'euazbipzncptldueeuechubrcourfpftcebikrxhybkymimgvldiwqvkszfycvqyvtiwfckexmowcxztkfyzqovbtmzpxojfofbvwnncajvrvdbvjhcrameamcfmcoxryjukhpljwszknhiypvyskmsujkuggpztltpgoczafmfelahqwjbhxtjmebnymdyxoeodqmvkxittxjnlltmoobsgzdfhismogqfpfhvqnxeuosjqqalvwhsidgiavcatjjgeztrjuoixxxoznklcxolgpuktirmduxdywwlbikaqkqajzbsjvdgjcnbtfksqhquiwnwflkldgdrqrnwmshdpykicozfowmumzeuznolmgjlltypyufpzjpuvucmesnnrwppheizkapovoloneaxpfinaontwtdqsdvzmqlgkdxlbeguackbdkftzbnynmcejtwudocemcfnuzbttcoew'
  )
);
// 159

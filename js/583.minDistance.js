/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */

// dp sol
// slow
var minDistance = function(word1, word2) {
  const n = word1.length;
  const m = word2.length;
  const cache = {};

  const helper = (i, j) => {
    if (i === 0) return j;
    if (j === 0) return i;
    const key = `${i}_${j}`;
    if (cache[key]) {
      return cache[key];
    } else if (word1.charAt(i - 1) === word2.charAt(j - 1)) {
      let ret = helper(i - 1, j - 1);
      cache[key] = ret;
      return ret;
    } else {
      let ret = Math.min(1 + helper(i, j - 1), 1 + helper(i - 1, j));
      cache[key] = ret;
      return ret;
    }
  };

  return helper(n, m);
};

// best sol from web
// also DP, but it is from bottom to up
// so it is much faster
// var minDistance = function(word1, word2) {
//   // DP, Time: O(m * n), Space: O(n)
//   var dp = Array(word2.length + 1).fill(0);

//   for (var i = 0; i < word1.length + 1; i++) {
//     var temp = Array(word2.length + 1).fill(0);
//     for (var j = 0; j < word2.length + 1; j++) {
//       if (i === 0 || j === 0) {
//         temp[j] = i + j;
//       } else if (word1[i - 1] === word2[j - 1]) {
//         temp[j] = dp[j - 1];
//       } else {
//         temp[j] = Math.min(dp[j], temp[j - 1]) + 1;
//       }
//     }
//     dp = temp;
//   }
//   return dp[word2.length];
// };

console.log(minDistance('sea', '')); //3

console.log(minDistance('sea', 'eat')); //2

console.log(minDistance('comable', 'comfortable')); //4

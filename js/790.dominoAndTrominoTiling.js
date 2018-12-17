/**
 * @param {number} N
 * @return {number}
 */

// DP
var numTilings = function(N) {
  const dp = new Array(N + 1).fill(0);
  const mod = 1e9 + 7;
  dp[0] = 1;
  dp[1] = 1;
  dp[2] = 2;
  dp[3] = 5;
  for (let i = 4; i <= N; i++) {
    dp[i] = (2 * dp[i - 1] + dp[i - 3]) % mod;
  }
  return dp[N];
};

console.log(numTilings(0));
// 1

console.log(numTilings(1));
// 1

console.log(numTilings(2));
// 2

console.log(numTilings(3));
// 5

console.log(numTilings(4));
// 11 =  F(3) + F(2) + 2 * F(1) + 2 * F(0)

console.log(numTilings(5));
// 24

console.log(numTilings(6));
// 53

console.log(numTilings(30));
// 312342182

/**
 * @param {number} N
 * @param {number} K
 * @param {number} W
 * @return {number}
 */

// nearly brute force
// TLE 97 / 146
var new21Game = function(N, K, W) {
  if (N === 0 || N >= K + W) return 1;
  let current = new Array(K + 1).fill(0);
  let next = null;
  const chance = 1 / W;

  current[0] = 1;
  let res = 0;
  let from = 0;

  for (let i = 0; i < K; i++) {
    next = new Array(K + 1).fill(0);
    for (let j = from; j < K; j++) {
      for (let k = 1; k <= W; k++) {
        if (j + k > N) break;
        if (j + k >= K) res += current[j] * chance;
        else next[j + k] += current[j] * chance;
      }
    }
    current = next;
    while (current[from] < 10e-11) from++;
  }
  // console.log(current);
  return res + current.reduce((acc, d) => acc + d, 0);
};

// the sol from discussion board
var new21Game = function(N, K, W) {
  if (N === 0 || N >= K + W) return 1;
  const dp = new Array(N + 1).fill(0);
  let wSum = 1;
  let res = 0;
  dp[0] = 1;
  for (let i = 1; i <= N; i++) {
    dp[i] = wSum / W;
    if (i < K) wSum += dp[i];
    else res += dp[i];
    if (i - W >= 0) wSum -= dp[i - W];
  }

  return res;
};

console.log(new21Game(1, 1, 2));
// 0.5

console.log(new21Game(5, 4, 2));
// 1

console.log(new21Game(10, 1, 10));
// 1

console.log(new21Game(6, 1, 10));
// 0.6

console.log(new21Game(21, 17, 10));
// 0.73278

console.log(new21Game(9811, 8776, 1096));
// 0.99696

console.log(new21Game(5710, 5070, 8516));
// 0.13649

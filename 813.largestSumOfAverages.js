/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */

const average = (A, from, to) => {
  let acc = 0;
  for (let i = from; i <= to; i++) {
    acc += A[i];
  }
  return acc / (to - from + 1);
};

// recursive DP
// 92ms
var largestSumOfAverages = function(A, K) {
  const n = A.length;

  const cache = new Array(n).fill(null).map(_ => new Array(K).fill(0));
  const helper = (to, group) => {
    // console.log(to, group);
    if (group === 1) return average(A, 0, to);
    else if (to === 0) return -Infinity;
    else if (cache[to][group]) return cache[to][group];
    else {
      let max = 0;
      for (let i = to - 1; i >= 0; i--) {
        max = Math.max(max, helper(i, group - 1) + average(A, i + 1, to));
        // console.log('==i', i, helper(i, group - 1) + average(A, i + 1, to));
      }
      // console.log('max', to, group, max);
      cache[to][group] = max;
      return max;
    }
  };
  return helper(n - 1, K);
};

// iterative DP
// 68ms
var largestSumOfAverages = function(A, K) {
  const n = A.length;
  let sum = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) sum[i + 1] = sum[i] + A[i];

  // const dp = new Array(n).fill(null).map(_ => new Array(K).fill(-Infinity));
  const dp = new Array(n).fill(0);

  for (let i = 1; i <= n; i++) {
    dp[i - 1] = sum[i] / i;
  }

  for (let k = 1; k < K; k++) {
    for (let to = n - 1; to >= 0; to--) {
      let max = -Infinity;
      for (let from = 0; from < to; from++) {
        max = Math.max(
          max,
          dp[from] + (sum[to + 1] - sum[from + 1]) / (to - from)
        );
      }
      dp[to] = max;
    }
  }
  console.log(dp);
  return dp[n - 1];
};

// best sol from web
// 60ms
// it use sum to acclerate the calculation average
// it is also compressed the space to O(n) instead of O(nk)
// var largestSumOfAverages = function(A, K) {
//   let N = A.length;
//   let sum = new Array(N + 1).fill(0);

//   for (let i = 0; i < N; i++) sum[i + 1] = sum[i] + A[i];

//   let dp = new Array(N);
//   for (let i = 0; i < N; i++) {
//     dp[i] = (sum[N] - sum[i]) / (N - i);
//   }

//   for (let k = 0; k < K - 1; k++) {
//     for (let i = 0; i < N; i++) {
//       for (let j = i + 1; j < N; j++) {
//         dp[i] = Math.max(dp[i], dp[j] + (sum[j] - sum[i]) / (j - i));
//       }
//     }
//   }
//   return dp[0];
// };

console.log(largestSumOfAverages([9, 1, 2, 3, 5], 1));
// 4

console.log(largestSumOfAverages([9, 1, 2, 3], 2));
// 11

console.log(largestSumOfAverages([2, 4, 10], 2));
// 13

console.log(largestSumOfAverages([9, 1, 2, 3, 9], 3));
// 20

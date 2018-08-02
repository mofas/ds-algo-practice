/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */

// recursive DP
// 96ms
var minSwap = function(A, B) {
  const n = A.length;

  const cache = [new Array(n + 1).fill(null), new Array(n + 1).fill(null)];
  A.push(Infinity);
  B.push(Infinity);

  const helper = (atA, i) => {
    if (i === 0) return 0;
    let currentA = A[i];
    let currentB = B[i];
    if (!atA) {
      currentA = B[i];
      currentB = A[i];
    }
    if (cache[atA][i] != null) return cache[atA][i];
    // console.log(i, atA, '===', currentA, currentB);
    let ret = Infinity;

    if (currentA > A[i - 1] && currentB > B[i - 1]) {
      ret = Math.min(ret, helper(1, i - 1));
    }
    if (currentA > B[i - 1] && currentB > A[i - 1]) {
      ret = Math.min(ret, helper(0, i - 1) + 1);
    }
    // console.log('ret', i, ret);
    cache[atA][i] = ret;
    return ret;
  };

  return helper(1, n);
};

// iterative DP
// 64ms
var minSwap = function(A, B) {
  const n = A.length;

  const dp = [new Array(n).fill(Infinity), new Array(n).fill(Infinity)];

  dp[0][0] = 0;
  dp[1][0] = 1;
  for (let i = 0; i < n - 1; i++) {
    let next0 = Infinity;
    let next1 = Infinity;
    if (A[i] < A[i + 1] && B[i] < B[i + 1]) {
      next0 = Math.min(next0, dp[0][i]);
      next1 = Math.min(next1, dp[1][i] + 1);
    }
    if (A[i] < B[i + 1] && B[i] < A[i + 1]) {
      next0 = Math.min(next0, dp[1][i]);
      next1 = Math.min(next1, dp[0][i] + 1);
    }
    dp[0][i + 1] = next0;
    dp[1][i + 1] = next1;
  }
  return Math.min(dp[0][n - 1], dp[1][n - 1]);
};

// best sol from web
// var minSwap = function(A, B) {
//   let n1 = 0, s1 = 1;
//   for (let i = 1; i < A.length; ++i) {
//     let n2 = Number.MAX_VALUE, s2 = Number.MAX_VALUE;
//     if (A[i - 1] < A[i] && B[i - 1] < B[i]) {
//       n2 = Math.min(n2, n1);
//       s2 = Math.min(s2, s1 + 1);
//     }
//     if (A[i - 1] < B[i] && B[i - 1] < A[i]) {
//       n2 = Math.min(n2, s1);
//       s2 = Math.min(s2, n1 + 1);
//     }
//     n1 = n2;
//     s1 = s2;
//   }
//   return Math.min(n1, s1);
// };

console.log(minSwap([1, 3, 5, 4], [1, 2, 3, 7]));
// 1

console.log(minSwap([0, 4, 4, 5, 9], [0, 1, 6, 8, 10]));
// 1

console.log(minSwap([3, 3, 8, 9, 10], [1, 7, 4, 6, 8]));
// 1

console.log(minSwap([1, 2, 5, 4], [1, 4, 3, 7]));
// 1

// console.log(
//   minSwap(
//     [
//       4,
//       10,
//       13,
//       14,
//       17,
//       19,
//       21,
//       24,
//       26,
//       27,
//       28,
//       29,
//       34,
//       37,
//       38,
//       42,
//       44,
//       46,
//       48,
//       51,
//       52,
//       53,
//       54,
//       57,
//       58,
//       59,
//       64,
//       65,
//       66,
//       67,
//       71,
//       73,
//       75,
//       76,
//       80,
//       81,
//       82,
//       83,
//       86,
//       88,
//       89,
//       90,
//       95,
//       97,
//       98,
//       99,
//       101,
//       105,
//       106,
//       108,
//       109,
//       110,
//       111,
//       112,
//       115,
//       119,
//       121,
//       122,
//       123,
//       124,
//       125,
//       126,
//       127,
//       128,
//       129,
//       130,
//       131,
//       133,
//       136,
//       138,
//       143,
//       145,
//       147,
//       149,
//       150,
//       153,
//       158,
//       160,
//       163,
//       164,
//       165,
//       167,
//       168,
//       169,
//       172,
//       173,
//       174,
//       176,
//       178,
//       179,
//       183,
//       184,
//       186,
//       188,
//       189,
//       192,
//       193,
//       194,
//       198,
//       200
//     ],
//     [
//       0,
//       1,
//       3,
//       5,
//       6,
//       7,
//       11,
//       13,
//       15,
//       16,
//       17,
//       21,
//       37,
//       39,
//       41,
//       42,
//       43,
//       45,
//       47,
//       50,
//       53,
//       55,
//       56,
//       57,
//       64,
//       66,
//       67,
//       68,
//       69,
//       70,
//       71,
//       72,
//       74,
//       75,
//       76,
//       77,
//       79,
//       80,
//       87,
//       88,
//       89,
//       95,
//       96,
//       97,
//       98,
//       100,
//       101,
//       105,
//       106,
//       107,
//       108,
//       112,
//       113,
//       115,
//       116,
//       118,
//       119,
//       122,
//       124,
//       125,
//       126,
//       127,
//       128,
//       131,
//       135,
//       136,
//       137,
//       138,
//       139,
//       140,
//       144,
//       145,
//       148,
//       150,
//       151,
//       154,
//       159,
//       160,
//       161,
//       162,
//       163,
//       167,
//       168,
//       170,
//       171,
//       174,
//       176,
//       178,
//       179,
//       180,
//       181,
//       185,
//       187,
//       189,
//       190,
//       191,
//       192,
//       198,
//       199,
//       200
//     ]
//   )
// );
// // 0

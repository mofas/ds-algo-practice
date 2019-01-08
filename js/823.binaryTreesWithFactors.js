/**
 * @param {number[]} A
 * @return {number}
 */

// recursive version
// 332ms beat 25%
// var numFactoredBinaryTrees = function(A) {
//   A.sort((a, b) => a - b);
//   const mod = 1e9 + 7;
//   const cache = {};
//   const helper = (from, to) => {
//     if (cache[`${from}_${to}`] != null) return cache[`${from}_${to}`];
//     if (to - from === 1) return 1;
//     let ret = 1;
//     const target = A[to - 1];
//     for (let i = to - 2; i >= from; i--) {
//       const a = A[i];
//       if (target % a === 0) {
//         const b = target / A[i];
//         const bIdx = A.indexOf(b);
//         if (bIdx >= 0 && bIdx < to) {
//           const comb = helper(0, i + 1) * helper(0, bIdx + 1);
//           // console.log(a, b, 'comb', comb);
//           ret += comb;
//         }
//       }
//     }
//     ret %= mod;
//     cache[`${from}_${to}`] = ret;
//     return ret;
//   };
//   let ret = 0;
//   for (let i = 1; i <= A.length; i++) {
//     ret += helper(0, i);
//     ret %= mod;
//   }
//   return ret;
// };

// iteration version
// 248ms
var numFactoredBinaryTrees = function(A) {
  A.sort((a, b) => a - b);
  const mod = 1e9 + 7;
  const len = A.length;
  const dp = new Array(len).fill(0);
  for (let i = 0; i < len; i++) {
    let ret = 1;
    const target = A[i];
    for (let j = 0; j < i; j++) {
      const a = A[j];
      if (a * a > target) break;
      if (target % a === 0) {
        const b = target / a;
        const bIdx = A.indexOf(b);
        if (bIdx >= 0 && bIdx < i) {
          if (j === bIdx) {
            ret += dp[j] * dp[bIdx];
          } else {
            ret += dp[j] * dp[bIdx] * 2;
          }
        }
      }
    }
    dp[i] = ret;
  }
  // console.log(dp);
  let ret = 0;
  for (let i = 0; i < A.length; i++) {
    ret += dp[i];
    ret %= mod;
  }
  return ret;
};

console.log(numFactoredBinaryTrees([2, 4]));
// 3

console.log(numFactoredBinaryTrees([2, 4, 5]));
// 4

console.log(numFactoredBinaryTrees([2, 4, 5, 10]));
// 7

console.log(numFactoredBinaryTrees([2, 4, 20, 100, 5]));
// 20

console.log(
  numFactoredBinaryTrees([
    46,
    144,
    5040,
    4488,
    544,
    380,
    4410,
    34,
    11,
    5,
    3063808,
    5550,
    34496,
    12,
    540,
    28,
    18,
    13,
    2,
    1056,
    32710656,
    31,
    91872,
    23,
    26,
    240,
    18720,
    33,
    49,
    4,
    38,
    37,
    1457,
    3,
    799,
    557568,
    32,
    1400,
    47,
    10,
    20774,
    1296,
    9,
    21,
    92928,
    8704,
    29,
    2162,
    22,
    1883700,
    49588,
    1078,
    36,
    44,
    352,
    546,
    19,
    523370496,
    476,
    24,
    6000,
    42,
    30,
    8,
    16262400,
    61600,
    41,
    24150,
    1968,
    7056,
    7,
    35,
    16,
    87,
    20,
    2730,
    11616,
    10912,
    690,
    150,
    25,
    6,
    14,
    1689120,
    43,
    3128,
    27,
    197472,
    45,
    15,
    585,
    21645,
    39,
    40,
    2205,
    17,
    48,
    136
  ])
);
// 509730797

/**
 * @param {number[]} nums
 * @return {number}
 */

// recursive DP
// 60 ms
// surprisingly fast!
var rob = function(nums) {
  const n = nums.length;
  const cache = [new Array(n).fill(null), new Array(n).fill(null)];
  const helper = (i, selectLast) => {
    // console.log(i, selectLast);
    if (i < 0) {
      return 0;
    } else if (cache[selectLast][i] !== null) {
      return cache[selectLast][i];
    } else if (i === 0) {
      if (selectLast) return 0;
      else return nums[0];
    } else if (i === n - 1) {
      return Math.max(helper(n - 2, 0), helper(n - 3, 1) + nums[n - 1]);
    } else {
      let ret = Math.max(
        helper(i - 1, selectLast),
        helper(i - 2, selectLast) + nums[i]
      );
      cache[selectLast][i] = ret;
      return ret;
    }
  };

  let ret = helper(n - 1, 0);
  // console.log(cache);
  return ret;
};

// iterative DP
// 52 ms
var rob = function(nums) {
  const n = nums.length;
  if (n === 0) return 0;
  if (n === 1) return nums[0];
  // select first, not select first
  const dp = [new Array(n).fill(0), new Array(n).fill(0)];

  const nums1 = nums.slice(1);
  const nums2 = nums.slice(0, n - 1);
  dp[0][1] = nums1[0];
  dp[1][1] = nums2[0];

  for (let i = 2; i < n; i++) {
    dp[0][i] = Math.max(dp[0][i - 1], dp[0][i - 2] + nums1[i - 1]);
    dp[1][i] = Math.max(dp[1][i - 1], dp[1][i - 2] + nums2[i - 1]);
  }

  // console.log(nums1, nums2, dp);

  return Math.max(dp[0][n - 1], dp[1][n - 1]);
};

console.log(rob([2, 3, 2]));
// 3

console.log(rob([2, 1, 1, 2]));
// 3

console.log(rob([1, 2, 3, 1]));
// 4

console.log(
  rob([
    114,
    117,
    207,
    117,
    235,
    82,
    90,
    67,
    143,
    146,
    53,
    108,
    200,
    91,
    80,
    223,
    58,
    170,
    110,
    236,
    81,
    90,
    222,
    160,
    165,
    195,
    187,
    199,
    114,
    235,
    197,
    187,
    69,
    129,
    64,
    214,
    228,
    78,
    188,
    67,
    205,
    94,
    205,
    169,
    241,
    202,
    144,
    240
  ])
);
// 4077

console.log(
  rob([
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ])
);
// 0

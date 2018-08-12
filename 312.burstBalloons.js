/**
 * @param {number[]} nums
 * @return {number}
 */

// TOP-down DP
// 35/60 TLE
// time complexity is O(n!) .....
var maxCoins = function(nums) {
  if (nums.length === 0) return 0;
  const cache = {};
  const helper = nums => {
    const n = nums.length;
    if (n === 1) return nums[0];
    if (cache[nums.join(',')]) return cache[nums.join(',')];
    let res = 0;
    for (let i = 0; i < n; i++) {
      const newArr = nums.slice(0, i).concat(nums.slice(i + 1));
      res = Math.max(
        res,
        helper(newArr) + (nums[i - 1] || 1) * nums[i] * (nums[i + 1] || 1)
      );
    }
    // console.log(nums, res);
    cache[nums.join(',')] = res;
    return res;
  };

  const ret = helper(nums.filter(d => d !== 0));

  // console.log(cache);
  return ret;
};

// TOP-down DP
// consider the "last" bollon to burst
// 100 ms
var maxCoins = function(nums) {
  nums = nums.filter(d => d !== 0);
  if (nums.length === 0) return 0;
  const n = nums.length + 1;
  nums.push(1);
  nums.unshift(1);
  const dp = new Array(n).fill(0).map(_ => new Array(n).fill(0));

  const helper = (left, right) => {
    if (left + 1 === right) return 0;
    if (dp[left][right] > 0) return dp[left][right];
    // console.log('enter', left, right);
    let ret = 0;
    for (let i = left + 1; i < right; i++) {
      ret = Math.max(
        ret,
        nums[left] * nums[i] * nums[right] + helper(left, i) + helper(i, right)
      );
    }
    // console.log(left, right, ret);
    dp[left][right] = ret;
    return ret;
  };

  return helper(0, n);
};

// best sol from web
// 64ms
var maxCoins = function(nums) {
  if (!nums) return 0;
  if (!nums.length) return 0;
  if (nums.length == 1) return nums[0];
  const n = nums.length;
  const res = new Array(n).fill(0).map(_ => new Array(n).fill(0));

  for (let len = 1; len <= n; len++) {
    for (let i = 0; i <= n - len; i++) {
      const j = i + len - 1;
      for (let k = i; k <= j; k++) {
        let left = 1;
        let right = 1;
        if (i != 0) {
          left = nums[i - 1];
        }
        if (j != nums.length - 1) {
          right = nums[j + 1];
        }

        let before = 0;
        let after = 0;
        if (k != i) {
          before = res[i][k - 1];
        }
        if (k != j) {
          after = res[k + 1][j];
        }

        res[i][j] = Math.max(
          res[i][j],
          before + left * nums[k] * right + after
        );
      }
    }
  }
  return res[0][res.length - 1];
};

console.log(maxCoins([4]));
// 4

console.log(maxCoins([3, 1, 5, 8]));
// 167

console.log(maxCoins([8, 3, 4, 3, 5]));
// 364 8*3*4 + 4*3*5 + 8*4*5 + 8*5 + 8

console.log(maxCoins([2, 5, 3, 7, 2]));
// 210

console.log(maxCoins([9, 76, 64, 21, 97, 60, 5]));
// 1088290

console.log(
  maxCoins([8, 2, 6, 8, 9, 8, 1, 4, 1, 5, 3, 0, 7, 7, 0, 4, 2, 2, 5, 5])
);
// 3830

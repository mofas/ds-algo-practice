/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  const n = nums.length;
  if (n === 0) return 0;
  const dp = new Array(n + 1).fill(0);
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);
  for (let i = 2; i < n; i++) {
    dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1]);
  }
  return dp[n - 1];
};

console.log(rob([1, 2, 3, 1]));
// 4

console.log(rob([2, 7, 9, 3, 1]));
// 12

console.log(rob([4, 1, 2, 3, 1, 5, 7, 1, 5, 2]));
// 19

/**
 * @param {number[]} nums
 * @return {boolean}
 */

// DP sol is so slow.
var canPartition = function(nums) {
  let set = new Set([0]);
  let next = null;
  const bound = Math.ceil(nums.reduce((acc, d) => acc + d, 0) / 2);
  // console.log(bound, 'bound');
  nums.forEach(d => {
    next = new Set();
    set.forEach(d2 => {
      if (d + d2 <= bound) next.add(d + d2);
      if (Math.abs(d - d2) <= bound) next.add(d - d2);
    });
    set = next;
  });

  // console.log(set);
  return set.has(0);
};

// top-down DP
// it doesn't use hash to calculate
// it is faster than bottom-top DP

// var canPartition = function(nums) {
//   if (!nums.length) return false;

//   let totalSum = 0;

//   nums.forEach(num => {
//     totalSum += num;
//   });

//   if (totalSum % 2 === 1) return false;
//   nums = nums.sort((a, b) => a > b);

//   return backtrack(totalSum / 2, nums.length - 1, nums);
// };

// var backtrack = function(sum, start, nums) {
//   if (start < 0) {
//     return false;
//   }
//   if (sum === nums[start]) {
//     return true;
//   }
//   if (sum < nums[start]) {
//     return false;
//   }
//   return (
//     backtrack(sum - nums[start], start - 1, nums) ||
//     backtrack(sum, start - 1, nums)
//   );
// };

// botto-top DP
var canPartition = function(nums) {
  if (nums.length === 0) return true;
  if (nums.length === 1) return nums[0] === 0;
  let sum = nums.reduce((memo, x) => memo + x, 0);
  if (sum % 2 === 1) return false;
  sum /= 2;
  const dp = new Array(sum + 1).fill(false);
  dp[0] = true;
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    for (let j = sum; j > 0; j--) {
      if (j >= num) {
        dp[j] = dp[j] || dp[j - num];
      }
    }
  }

  return dp[sum];
};

console.log(canPartition([1, 5, 11, 5]));
// true

console.log(canPartition([1, 1]));
// true

console.log(canPartition([1, 2, 3, 5]));
// false

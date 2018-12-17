/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
  const len = nums.length;
  let i = 0;
  let sum = 0;
  for (i = 0; i < k; i++) {
    sum += nums[i];
  }

  let max = sum;

  for (; i < len; i++) {
    sum = sum - nums[i - k] + nums[i];
    if (sum > max) max = sum;
  }

  return max / k;
};

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4)); // 12.75

console.log(findMaxAverage([1, -1, 2, -2, 3, -3], 3)); // 1

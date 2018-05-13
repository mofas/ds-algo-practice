/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let max = nums[0];
  let currentAcc = nums[0];
  for (let i = 1; i < nums.length; i++) {
    currentAcc += nums[i];
    if (currentAcc < nums[i]) {
      currentAcc = nums[i];
    }
    if (currentAcc > max) max = currentAcc;
  }
  return max;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
console.log(maxSubArray([-1])); // -1
console.log(maxSubArray([-3, -1])); // -1
console.log(maxSubArray([-1, -4, 0])); // 0
console.log(maxSubArray([-2, 1])); // 1

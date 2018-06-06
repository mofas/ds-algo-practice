/**
 * @param {number[]} nums
 * @return {number[]}
 */

var findErrorNums = function(nums) {
  let repeated = null;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if (nums[Math.abs(n) - 1] > 0) {
      nums[Math.abs(n) - 1] = -nums[Math.abs(n) - 1];
    } else {
      repeated = Math.abs(n);
    }
  }

  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if (nums[i] > 0) {
      return [repeated, i + 1];
    }
  }
};

console.log(findErrorNums([1, 2, 2, 4]));
// [2, 3]

console.log(findErrorNums([2, 3, 4, 4]));
// [4, 1]

/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
  const len = nums.length;
  let max = 1;
  let current = 1;
  if (len === 0) return 0;
  for (let i = 0; i < len - 1; i++) {
    if (nums[i + 1] > nums[i]) {
      current++;
    } else {
      if (current > max) {
        max = current;
      }
      current = 1;
    }
  }

  if (current > max) max = current;

  return max;
};

console.log(findLengthOfLCIS([])); // 0

console.log(findLengthOfLCIS([1])); // 1

console.log(findLengthOfLCIS([1, 3, 5, 4, 7])); // 3

console.log(findLengthOfLCIS([2, 2, 2, 2, 2])); // 1

console.log(findLengthOfLCIS([7, 8, 9, 1, 2, 3, 4])); // 4

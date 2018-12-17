/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  let max = 0;
  let current = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      current++;
    } else {
      max = current > max ? current : max;
      current = 0;
    }
  }
  return max > current ? max : current;
};

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));
console.log(findMaxConsecutiveOnes([1, 0, 1, 0, 1, 1, 0, 1, 0]));

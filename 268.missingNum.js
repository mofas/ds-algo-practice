/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  let ret = nums.length;
  nums.forEach((d, i) => {
    ret = ret + i - nums[i];
  });
  return ret;
};

console.log(missingNumber([3, 0, 1])); // 2
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); // 8

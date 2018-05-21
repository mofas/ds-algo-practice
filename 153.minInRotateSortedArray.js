/**
 * @param {number[]} nums
 * @return {number}
 */

// should be able to use divide and conquer
var findMin = function(nums) {
  console.log(nums);
  const len = nums.length;
  if (len === 1) return nums[0];
  if (len === 2) return nums[0] > nums[1] ? nums[1] : nums[0];

  const head = nums[0];
  const middle = Math.floor(nums.length / 2);
  const last = nums[len - 1];

  if (head > nums[middle] || last > nums[middle]) {
    return findMin(nums.slice(0, middle + 1));
  } else {
    return findMin(nums.slice(middle, len));
  }
};

console.log(findMin([3, 4, 5, 1, 2])); // 1

console.log(findMin([4, 5, 6, 7, 0, 1, 2])); // 0

console.log(findMin([3, 4, 5, 1, 2])); // 1

console.log(findMin([3, 4, 5])); // 3

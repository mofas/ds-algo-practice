/**
 * @param {number[]} nums
 * @return {number}
 */

const helper = (nums, l, r) => {
  // console.log(nums, l, r);
  if (l === r) {
    return l;
  }
  if (r - l === 1) {
    return nums[r] > nums[l] ? r : l;
  }

  const mid1 = l + Math.floor((r - l) / 2);
  const mid2 = mid1 + 1;
  if (nums[mid1] > nums[mid2]) {
    return helper(nums, l, mid1);
  } else {
    return helper(nums, mid2, r);
  }
};

var findPeakElement = function(nums) {
  const len = nums.length;
  return helper(nums, 0, len - 1);
};

console.log(findPeakElement([3])); // 0

console.log(findPeakElement([1, 2, 3])); // 2

console.log(findPeakElement([3, 2, 1])); // 0

console.log(findPeakElement([1, 2, 3, 1])); // 2

console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4])); // 1 or 5

console.log(findPeakElement([1, 3, 4, 2, 3, 2, 3])); // 2 or 4 or 6

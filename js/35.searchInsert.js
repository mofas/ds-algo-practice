//TODO: we can improve it by binary search.

var searchInsert = function(nums, target) {
  const len = nums.length;
  let i = 0;
  for (; i < len; i++) {
    if (nums[i] >= target) {
      break;
    }
  }
  return i;
};

console.log(searchInsert([1, 3, 5, 6], 5)); // 2
console.log(searchInsert([1, 3, 5, 6], 2)); // 1
console.log(searchInsert([1, 3, 5, 6], 7)); // 4
console.log(searchInsert([1, 3, 5, 6], 0)); // 0

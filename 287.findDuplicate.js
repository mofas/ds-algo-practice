var findDuplicate = function(nums) {
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    const n = nums[i];
    if (nums[Math.abs(n) - 1] > 0) {
      nums[Math.abs(n) - 1] = -nums[Math.abs(n) - 1];
    } else {
      return Math.abs(n);
    }
  }

  return len;
};

console.log(findDuplicate([1, 3, 4, 2, 2])); // 2

console.log(findDuplicate([3, 1, 3, 4, 2])); // 3

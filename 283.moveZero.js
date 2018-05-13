var moveZeroes = function(nums) {
  let i,
    len = nums.length,
    last = 0;
  for (i = 0; i < len; i++) {
    if (nums[i] !== 0) {
      nums[last++] = nums[i];
    }
  }
  for (i = last; i < len; i++) {
    nums[i] = 0;
  }
  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));

console.log(moveZeroes([1, 2, 3, 0, 4, 0, 0, 5]));

console.log(moveZeroes([0, 0, 0, 0, 1, 2, 3, 0, 4, 0, 5]));

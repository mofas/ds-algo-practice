/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// counting sort
var sortColors = function(nums) {
  const count = [0, 0, 0];

  for (let i = 0; i < nums.length; i++) {
    count[nums[i]]++;
  }

  for (let i = 0; i < nums.length; i++) {
    if (i >= count[1] + count[0]) {
      nums[i] = 2;
    } else if (i >= count[0]) {
      nums[i] = 1;
    } else {
      nums[i] = 0;
    }
  }
  console.log(nums);
};

sortColors([2, 0, 2, 1, 1, 0]);

sortColors([2, 0, 0, 1, 0, 0]);

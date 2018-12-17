/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  const len = nums.length;
  if (len === 0) return 0;

  let newLen = 0,
    i = 1;

  for (; i < len; i++) {
    if (nums[newLen] !== nums[i]) {
      newLen++;
      nums[newLen] = nums[i];
    }
  }

  console.log(nums);
  return newLen + 1;
};

console.log(removeDuplicates([1, 1, 2])); // [1, 2] 2
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); // [0, 1, 2, 3, 4] 5

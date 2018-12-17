/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  const n = nums.length;
  let repeat = 0;
  let prev = null;
  let writeInCursor = 0;
  let removed = 0;
  for (let i = 0; i < n; i++) {
    if (prev === nums[i]) {
      repeat++;
      if (repeat > 1) {
        //do nothing
        removed++;
      } else {
        nums[writeInCursor++] = nums[i];
      }
    } else {
      prev = nums[i];
      nums[writeInCursor++] = nums[i];
      repeat = 0;
    }
  }
  return n - removed;
};

console.log(removeDuplicates([1, 2, 3, 4])); //[1, 2, 3, 4] 4

console.log(removeDuplicates([1, 1, 1, 2, 2, 3])); //[1, 1, 2, 2, 3] 5

console.log(removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3])); // [0, 0, 1, 1, 2, 3, 3] 7

console.log(removeDuplicates([0, 0, 0, 0, 0, 0, 1, 1, 1])); // [0, 0, 1, 1, 2, 3, 3] 7

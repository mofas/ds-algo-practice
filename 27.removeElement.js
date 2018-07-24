/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let acc = 0;
  let pointer = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) continue;
    else {
      acc++;
      nums[pointer++] = nums[i];
    }
  }
  return acc;
};

const arr1 = [3, 2, 2, 3];
console.log(removeElement(arr1, 3));
console.log(arr1);

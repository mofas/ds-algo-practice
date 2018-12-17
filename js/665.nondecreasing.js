/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
  const len = nums.length;

  let moveLeft = 0;
  let moveRight = 0;

  let max = nums[0];
  let min = nums[len - 1];

  for (let i = 1; i < len; i++) {
    if (nums[i] > max) max = nums[i];
    if (nums[len - i - 1] < min) min = nums[len - i - 1];
    if (nums[i] < max) moveLeft++;
    if (nums[len - i - 1] > min) moveRight++;
  }

  const change = Math.min(moveLeft, moveRight);
  return change <= 1;
};

console.log(checkPossibility([4, 2, 3])); // true

console.log(checkPossibility([1, 2, 3, 4])); // true

console.log(checkPossibility([1, 4, 2, 3])); // true

console.log(checkPossibility([4, 2, 1])); // false

console.log(checkPossibility([3, 1, 4, 2])); // false

console.log(checkPossibility([3, 4, 2, 3])); // false

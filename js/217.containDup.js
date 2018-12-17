/**
 * @param {number[]} nums
 * @return {boolean}
 */

var containsDuplicate = function(nums) {
  const n = nums.length;
  const hash = {};

  for (let i = 0; i < n; i++) {
    const d = nums[i];
    if (hash[d]) {
      return true;
    }
    hash[d] = true;
  }
  return false;
};

console.log(containsDuplicate([1, 2, 3, 1])); //true

console.log(containsDuplicate([1, 2, 3, 4])); //false

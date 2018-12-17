/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  const len = nums.length;
  let ret = new Array(len);
  let i = 0;
  for (i = 0; i < len; i++) {
    ret[i] = i + 1;
  }
  for (i = 0; i < len; i++) {
    ret[nums[i] - 1] = -1;
  }
  ret = ret.filter(d => d > 0);
  return ret;
};

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])); // [5,6]
console.log(findDisappearedNumbers([1, 1])); // [2]

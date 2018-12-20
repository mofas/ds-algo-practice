/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// 68ms
var permute = function(nums) {
  const len = nums.length;
  let ret = [new Array(len).fill(null)];
  let next = [];

  for (let i = 0; i < len; i++) {
    for (const item of ret) {
      for (let j = 0; j < len; j++) {
        if (item[j] == null) {
          let newCopy = item.slice();
          newCopy[j] = nums[i];
          next.push(newCopy);
        }
      }
    }
    ret = next;
    next = [];
  }
  return ret;
};

console.log(permute([1, 2, 3]));

console.log(permute([3, 4, 5, 7]));

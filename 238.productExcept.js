/**
 * @param {number[]} nums
 * @return {number[]}
 */
//brute fore
// var productExceptSelf = function(nums) {
//   const len = nums.length;
//   const ret = new Array(len).fill(1);
//   for (let i = 0; i < len; i++) {
//     for (let j = 0; j < len; j++) {
//       if (i !== j) ret[i] = ret[i] * nums[j];
//     }
//   }

//   return ret;
// };

// it is cool
// but not come from my own idea.
var productExceptSelf = function(nums) {
  const len = nums.length;
  const ret = new Array(len).fill(1);

  for (let i = 1; i < len; i++) {
    ret[i] = ret[i - 1] * nums[i - 1];
  }
  let prev = 1;
  for (let i = len - 1; i >= 0; i--) {
    ret[i] = ret[i] * prev;
    prev *= nums[i];
  }
  return ret;
};

console.log(productExceptSelf([1, 2, 3, 4])); // [24,12,8,6]

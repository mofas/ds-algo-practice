/**
 * @param {number[]} nums
 * @return {boolean}
 */

// DP, it is too slow.
// var canJump = function(nums) {
//   const n = nums.length;
//   const cache = {};
//   const helper = i => {
//     if (cache[i]) return cache[i];
//     const movable = nums[i];
//     if (i === n - 1) return true;
//     if (movable === 0) return false;
//     for (let j = 1; j < movable + 1; j++) {
//       const ret = helper(i + j);
//       cache[i + j] = ret;
//       if (ret) return true;
//     }
//     return false;
//   };

//   return helper(0);
// };

var canJump = function(nums) {
  const n = nums.length;
  let max = 0;
  if (n < 1) return true;

  for (let i = 0; i < n; i++) {
    if (max < i) return false;
    max = Math.max(max, i + nums[i]);
    if (max === n - 1) return true;
  }
  return max >= n - 1;
};

console.log(canJump([])); // true
console.log(canJump([0])); // true
console.log(canJump([1])); // true

console.log(canJump([2, 0])); // true

console.log(canJump([2, 3, 1, 1, 4])); // true

console.log(canJump([4, 4, 1, 1, 0, 4])); // true

console.log(canJump([3, 2, 1, 0, 4])); // false

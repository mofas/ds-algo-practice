/**
 * @param {number[]} nums
 * @return {number}
 */

// brute force
// sorting is too slow..
// var minMoves = function(nums) {
//   nums.sort((b, a) => b - a);
//   let ret = 0;
//   let first = nums[0];
//   for (let i = 1; i < nums.length; i++) {
//     ret += nums[i] - first;
//   }

//   return ret;
// };

var minMoves = function(nums) {
  let ret = 0;
  let min = Infinity;

  for (let i = 0; i < nums.length; i++) {
    if (min > nums[i]) min = nums[i];
  }

  for (let i = 0; i < nums.length; i++) {
    ret += nums[i] - min;
  }

  return ret;
};

console.log(minMoves([1, 2, 3]));
// 3

console.log(minMoves([1, 5, 2]));
// 5

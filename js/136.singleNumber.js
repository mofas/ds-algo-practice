/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  const hash = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (hash.has(nums[i])) hash.delete(nums[i]);
    else hash.add(nums[i]);
  }
  return hash.values().next().value;
};

// best sol from web
// using bit operator to cancel, brilliant idea
// var singleNumber = function(nums) {
//   var result = 0;
//   for (var i = 0; i < nums.length; i++) {
//     result ^= nums[i];
//   }
//   return result;
// };

console.log(singleNumber([2, 2, 1]));
// 1

console.log(singleNumber([4, 1, 2, 1, 2]));
// 4

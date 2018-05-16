/**
 * @param {number[]} nums
 * @return {number[]}
 */

// // brute force with O(n) with extra O(n) space
// var findDuplicates = function(nums) {
//   const ret = [];
//   const hash = {};
//   nums.forEach(d => {
//     if (hash[d]) ret.push(d);
//     hash[d] = 1;
//   });

//   return ret;
// };

var findDuplicates = function(nums) {
  const ret = [];
  nums.forEach(n => {
    if (nums[Math.abs(n) - 1] > 0) {
      nums[Math.abs(n) - 1] = -nums[Math.abs(n) - 1];
    } else {
      ret.push(Math.abs(n));
    }
  });

  return ret;
};

console.log(findDuplicates([])); // []

console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1])); // [2, 3]

console.log(findDuplicates([1, 5, 5, 4, 3, 2, 6])); // [5]

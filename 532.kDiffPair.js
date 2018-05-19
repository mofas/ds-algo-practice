/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// sorting is slow.
// var findPairs = function(nums, k) {
//   let c = 0;
//   nums.sort((a, b) => a - b);
//   const len = nums.length;
//   let prev = null;

//   // console.log(nums);
//   for (let i = 0; i < len; i++) {
//     if (nums[i] === prev) {
//       continue;
//     } else {
//       for (let j = i + 1; j < len; j++) {
//         if (nums[i] + k === nums[j]) {
//           // console.log(i, j);
//           c++;
//           break;
//         } else if (nums[i] + k < nums[j]) {
//           break;
//         }
//       }
//     }
//     prev = nums[i];
//   }
//   return c;
// };

//using hash map
var findPairs = function(nums, k) {
  const len = nums.length;
  if (len === 0 || k < 0) {
    return 0;
  }

  let c = 0;
  let hash = {};

  for (let i = 0; i < len; i++) {
    const n = nums[i];
    hash[n] = hash[n] == null ? 1 : hash[n] + 1;
  }

  for (let key in hash) {
    const n = parseInt(key);
    if (k === 0) {
      if (hash[key] > 1) c++;
    } else if (hash[n + k]) {
      c++;
    }
  }

  return c;
};

console.log(findPairs([3, 1, 4, 1, 5], 2)); // 2

console.log(findPairs([1, 2, 3, 4, 5], 1)); // 4

console.log(findPairs([1, 3, 1, 5, 4], 0)); // 1

console.log(findPairs([1, 1, 1, 1, 1], 0)); // 1

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

// recursive DP
// it is actually DFS
// 140 ms
var canPartitionKSubsets = function(nums, k) {
  const n = nums.length;
  let sum = 0;
  for (const num of nums) {
    sum += num;
  }
  if (sum % k !== 0) return false;
  nums.sort((a, b) => a - b);
  let sumInGroup = sum / k;
  const helper = (groups, i) => {
    // console.log(groups, i);
    if (nums[i - 1] > sumInGroup) return false;
    if (i === 0) {
      for (const group of groups) {
        if (group !== sumInGroup) return false;
      }
      return true;
    }
    for (let j = 0; j < groups.length; j++) {
      if (groups[j] + nums[i - 1] <= sumInGroup) {
        groups[j] = groups[j] + nums[i - 1];
        if (helper(groups, i - 1)) return true;
        groups[j] = groups[j] - nums[i - 1];
      }
    }
    return false;
  };
  // console.log(sumInGroup);
  return helper(new Array(k).fill(0), n);
};

// best sol from web
// also the ans from discussion board
// 60ms
// const canPartition = (target, arr, cur, used, k, start) => {
//   if (k === 1) return true;
//   if (cur === target) {
//     return canPartition(target, arr, 0, used, k - 1, 0);
//   } else {
//     for (let i = start; i < arr.length; i++) {
//       if (!used[i]) {
//         used[i] = true;
//         if (canPartition(target, arr, cur + arr[i], used, k, i + 1))
//           return true;
//         used[i] = false;
//       }
//     }
//   }
//   return false;
// };

// var canPartitionKSubsets = function(nums, k) {
//   let sum = nums.reduce((total, cur) => (total += cur), 0);
//   if (sum % k !== 0) return false;
//   const target = sum / k;
//   return canPartition(
//     target,
//     nums,
//     0,
//     new Array(nums.length).fill(false),
//     k,
//     0
//   );
// };

console.log(canPartitionKSubsets([4, 3, 2, 3, 5, 2, 1], 4));
// true

console.log(canPartitionKSubsets([4, 3, 2, 3, 6, 1, 1], 4));
// false

console.log(
  canPartitionKSubsets(
    [
      7628,
      3147,
      7137,
      2578,
      7742,
      2746,
      4264,
      7704,
      9532,
      9679,
      8963,
      3223,
      2133,
      7792,
      5911,
      3979
    ],
    6
  )
);
// false

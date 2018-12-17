/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */

// modify from 15.3sum
// still some optimization can be done
var fourSum = function(nums, target) {
  const n = nums.length;
  nums.sort((a, b) => a - b);
  if (n < 4) return [];

  const max = nums[n - 1];
  let ret = [];

  for (let i = 0; i < n - 3; i++) {
    if (target > 0 && nums[i] > target) return ret;
    for (let j = i + 1; j < n - 2; j++) {
      if (target > 0 && nums[i] + nums[j] > target) break;
      let from = j + 1;
      let to = n - 1;
      let t = target - nums[i] - nums[j];
      while (from < to) {
        let sum = nums[from] + nums[to];
        if (sum < t) {
          from++;
        } else if (sum > t) {
          to--;
        } else {
          ret.push([nums[i], nums[j], nums[from], nums[to]]);
          const fc = nums[from];
          const tc = nums[to];
          while (from < to && nums[from] === fc) from++;
          while (from < to && nums[to] === tc) to--;
        }
      }
      while (j + 1 < n && nums[j + 1] === nums[j]) j++;
    }
    while (i + 1 < n && nums[i + 1] === nums[i]) i++;
  }

  return ret;
};

// best sol from web
// var fourSum = function(nums, target) {
//   const len = nums.length
//   const results = []
//   nums.sort((a, b) => a - b)
//   const max = nums[len - 1]
//   if (!nums || len < 4 || (4 * nums[0] > target) || 4 * max < target) return results

//   for (let i = 0; i < len; i++) {
//     const num = nums[i]
//     if (i > 0 && num === nums[i - 1]) continue // duplicate
//     if (num + 3 * max < target) continue // too small
//     if (4 * num > target) break // too large
//     if (4 * num === target) {
//       if (i + 3 < len && nums[i + 3] === num) {
//         results.push([num, num, num, num])
//       }
//       break
//     }
//     threeSum(nums, results, i + 1, target - num)
//   }
//   return results
// }

// var threeSum = (nums, results, start, target) => {
//   const len  = nums.length - 1
//   const max = nums[len]
//   if (3 * nums[start] > target || 3 * nums[len] < target) return

//   for (let i = start; i < len; i += 1) {
//     if (i > start && nums[i] === nums[i - 1]) continue
//     let low = i + 1
//     let high = len
//     const sum = target - nums[i]
//     while(low < high) {
//       if (nums[low] + nums[high] === sum) {
//         results.push([nums[start - 1], nums[i], nums[low], nums[high]])
//         while (low < high && nums[low] === nums[low + 1]) low += 1
//         while (low < high && nums[high] === nums[high - 1]) high -= 1
//         low += 1
//         high -= 1
//       } else if (nums[low] + nums[high] < sum) {
//         low += 1
//       } else {
//         high -= 1
//       }
//     }
//   }
// }

console.log(fourSum([1, 0, -1, 0, -2, 2], 0));

console.log(fourSum([0, 4, -5, 2, -2, 4, 2, -1, 4], 12));

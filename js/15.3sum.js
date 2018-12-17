/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// brute force
// var threeSum = function(nums) {
//   const n = nums.length;
//   nums.sort((a, b) => a - b);
//   if (n === 0) return [];

//   let ret = [];
//   let start = 0;
//   let prev = null;

//   let prevEnd = n - 1;
//   let sum = 0;
//   while (start < n) {
//     // console.log('start', start, prevEnd);
//     for (let end = prevEnd; end > start; end--) {
//       sum = nums[start] + nums[end];

//       if (sum >= 0) {
//         inner: for (let k = start + 1; k < end && nums[k] <= 0; k++) {
//           // console.log(
//           //   'a',
//           //   nums[start],
//           //   nums[k],
//           //   nums[end],
//           //   '--',
//           //   start,
//           //   k,
//           //   end
//           // );

//           if (sum + nums[k] === 0) {
//             ret.push([nums[start], nums[k], nums[end]]);
//             while (end > start && nums[end] === nums[end - 1]) {
//               end--;
//             }
//             break inner;
//           }
//         }
//       } else if (sum < 0) {
//         inner: for (let k = end - 1; k > start && nums[k] >= 0; k--) {
//           // console.log(
//           //   'b',
//           //   nums[start],
//           //   nums[k],
//           //   nums[end],
//           //   '--',
//           //   start,
//           //   k,
//           //   end
//           // );
//           if (sum + nums[k] === 0) {
//             ret.push([nums[start], nums[k], nums[end]]);
//             while (end > start && nums[end] === nums[end - 1]) {
//               end--;
//             }
//             break inner;
//           }
//         }
//       }
//     }
//     // if (nums[start] + nums[prevEnd] !== 0) {
//     //   prev = nums[prevEnd];
//     //   while (prevEnd > start && prev === nums[prevEnd]) {
//     //     prevEnd--;
//     //   }
//     // }

//     prev = nums[start];
//     while (start < n && prev === nums[start]) {
//       start++;
//     }
//   }

//   return ret;
// };

// reasonable sol from web
var threeSum = function(nums) {
  const n = nums.length;
  nums.sort((a, b) => a - b);
  if (n === 0) return [];

  let ret = [];

  for (let i = 0; i < n - 2; i++) {
    //perf optimization
    if (nums[i] > 0) return ret;

    let from = i + 1;
    let to = n - 1;
    let target = -nums[i];
    while (from < to) {
      let sum = nums[from] + nums[to];
      if (sum < target) {
        from++;
      } else if (sum > target) {
        to--;
      } else {
        ret.push([nums[i], nums[from], nums[to]]);
        const fc = nums[from];
        const tc = nums[to];
        while (from < to && nums[from] === fc) from++;
        while (from < to && nums[to] === tc) to--;
      }
    }
    while (i + 1 < n && nums[i + 1] === nums[i]) i++;
  }

  return ret;
};

console.log(threeSum([0, 1, 2, 3]));
// []

console.log(threeSum([-4, -1, -1, 0, 1, 2]));
// [-1, 0, 1], [-1, -1, 2];

console.log(threeSum([-4, -1, -1, 2, 3, 5]));
// [-1, -1, 2], [-4 , -1, 5]

console.log(threeSum([-1, -1, -1, -1, 2, 2]));
// [-1, -1, 2]

console.log(threeSum([-2, -1, -1, 0, 1, 1, 2]));
// [-2, 0, 2] [-2, 1, 1] [-1, 0, 1] [-1, -1, 2]

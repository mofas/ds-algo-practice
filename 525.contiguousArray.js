/**
 * @param {number[]} nums
 * @return {number}
 */

// // recursive DP is slow in the end
// var findMaxLength = function(nums) {
//   const n = nums.length;
//   let acc = 0;
//   nums = nums.map(d => {
//     if (d === 0) {
//       acc--;
//       return -1;
//     } else {
//       acc++;
//       return 1;
//     }
//   });

//   let max = 0;
//   let checked = {};
//   const helper = (left, right, current) => {
//     if (current === 0) {
//       if (right - left + 1 > max) max = right - left + 1;
//     } else if (right - left < max || checked[left + ',' + right]) {
//       return;
//     } else {
//       checked[left + ',' + right] = true;
//       helper(left + 1, right, current - nums[left]);
//       helper(left, right - 1, current - nums[right]);
//     }
//   };

//   helper(0, n - 1, acc);
//   return max;
// };

// the solution from discussion board
// 172ms
var findMaxLength = function(nums) {
  const n = nums.length;
  if (n === 0) return 0;
  let hash = { '0': -1 };
  let acc = 0;
  let max = 0;
  for (let i = 0; i < n; i++) {
    if (nums[i] === 0) acc--;
    else acc++;

    if (hash[acc] != null) {
      if (i - hash[acc] > max) max = i - hash[acc];
    } else {
      hash[acc] = i;
    }
  }

  return max;
};

// best sol from web
// map is faster
// 128ms
// var findMaxLength = function(nums) {
//   const map = new Map();
//   map.set(0, -1);
//   let maxLen = 0;
//   let currTotal = 0;
//   for (let i = 0; i < nums.length; i++) {
//     currTotal += nums[i] === 0 ? -1 : 1;
//     if (map.has(currTotal)) {
//       maxLen = Math.max(maxLen, i - map.get(currTotal));
//     } else {
//       map.set(currTotal, i);
//     }
//   }

//   return maxLen;
// };

console.log(findMaxLength([0, 1]));
// 2

console.log(findMaxLength([0, 0, 1]));
// 2

console.log(findMaxLength([0, 1, 1]));
// 2

console.log(findMaxLength([0, 1, 0]));
// 2

console.log(findMaxLength([0, 0, 1, 1, 0, 0]));
// 4

console.log(findMaxLength([0, 1, 0, 1]));
// 4

console.log(findMaxLength([0, 1, 1, 1, 0, 0, 1]));
// 6

console.log(findMaxLength([0, 0, 1, 0, 0, 0, 1, 1]));
// 6

console.log(findMaxLength([0, 0, 1, 1, 1, 0, 0]));
// 6

console.log(findMaxLength([0, 1, 0, 1, 1, 0, 1, 0]));
// 8

console.log(findMaxLength([1, 0, 1, 0, 0, 1, 0, 1]));
// 8

console.log(findMaxLength([1, 0, 1, 0, 0, 0, 1, 1]));
// 8

console.log(findMaxLength([1, 0, 1, 0, 1, 1, 0, 0]));
// 8

console.log(findMaxLength([1, 1, 1, 0, 1, 0, 0, 0]));
// 8

console.log(
  findMaxLength([
    0,
    1,
    0,
    1,
    1,
    1,
    0,
    0,
    1,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    1,
    1,
    0,
    1,
    1,
    0,
    0,
    0,
    1,
    0,
    1,
    0,
    0,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    1,
    1,
    1,
    0,
    1,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    1,
    1,
    1,
    1,
    0,
    0,
    1,
    0,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    1,
    0,
    1,
    1,
    0,
    0,
    1,
    1,
    0,
    1,
    1,
    1,
    1,
    0,
    1,
    1,
    0,
    0,
    0,
    1,
    1
  ])
);
// 68

console.log(
  findMaxLength([
    1,
    1,
    1,
    1, // 3
    1,
    1,
    1,
    0, // 7
    0,
    0,
    0, // 10
    1,
    1, // 12
    0,
    1,
    0,
    0,
    1,
    1,
    1,
    1, // 20
    1,
    1, // 22
    1,
    1,
    1,
    0,
    0,
    0,
    0, // 29
    1, // 30
    0, // 31
    0,
    0,
    0, // 34
    1, // 35
    0,
    1,
    0,
    0,
    0,
    1,
    1,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    1,
    0,
    1,
    1,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    1,
    1,
    1,
    0,
    1,
    1,
    0,
    1,
    0,
    0,
    1,
    1,
    0,
    1,
    0,
    0,
    1,
    1,
    1,
    0,
    0,
    1,
    0,
    1,
    1,
    1,
    0,
    0,
    1,
    0,
    1,
    1
  ])
);
// 94

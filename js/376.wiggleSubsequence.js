/**
 * @param {number[]} nums
 * @return {number}
 */

// recursive DP
// 116ms
var wiggleMaxLength = function(nums) {
  const n = nums.length;
  if (n < 2) return n;
  let cache = new Array(n + 1).fill(0).map(_ => new Array(n + 1).fill(0));
  const helper = (idx, prevIdx) => {
    const current = nums[idx];
    const prev = nums[prevIdx];
    const next = nums[idx - 1];
    // console.log(idx, prevIdx);
    if (cache[idx][prevIdx] > 0) return cache[idx][prevIdx];
    if (
      (prev > current && current < next) ||
      (prev < current && current > next)
    ) {
      if (idx === 1) return 2;
      else {
        const ret = Math.max(
          helper(idx - 1, idx) + 1,
          helper(idx - 1, prevIdx)
        );
        cache[idx][prevIdx] = ret;
        return ret;
      }
    } else {
      if (idx === 1) return 1;
      const ret = helper(idx - 1, prevIdx);
      cache[idx][prevIdx] = ret;
      return ret;
    }
  };

  nums.push(Infinity);
  let ret = helper(n, n);
  // console.log(cache);
  cache = new Array(n + 1).fill(0).map(_ => new Array(n + 1).fill(0));

  nums[n] = -Infinity;
  ret = Math.max(ret, helper(n, n));
  // console.log(cache);

  return ret;
};

// iterative DP
var wiggleMaxLength = function(nums) {
  const n = nums.length;
  if (n < 2) return n;
  let f = new Array(n).fill(1);
  let d = new Array(n).fill(1);
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        f[i] = Math.max(f[i], d[j] + 1);
      }
      if (nums[j] > nums[i]) {
        d[i] = Math.max(d[i], f[j] + 1);
      }
      // console.log(i, j, f, d);
    }
  }
  // console.log(f, d);
  return Math.max(f[n - 1], d[n - 1]);
};

// best sol from web
// 52ms
// greeding algorithm
// var wiggleMaxLength = function(nums) {
//   if (!nums.length) return 0;
//   let count = 1;
//   let preDiff = 0;
//   for (let i = 1; i < nums.length; i++) {
//     let diff = nums[i] - nums[i - 1];
//     if ((diff > 0 && preDiff <= 0) || (diff < 0 && preDiff >= 0)) {
//       count++;
//       preDiff = diff;
//     }
//   }
//   return count;
// };

console.log(wiggleMaxLength([0, 0, 0]));
// 1

console.log(wiggleMaxLength([1, 2, 3, 4, 5, 6, 7, 8, 9]));
// 2

console.log(wiggleMaxLength([1, 3, 2]));
// 3

console.log(wiggleMaxLength([3, 3, 3, 2, 5]));
// 3

console.log(wiggleMaxLength([1, 7, 4, 9, 2, 5]));
// 6

console.log(wiggleMaxLength([1, 17, 5, 10, 13, 15, 10, 5, 16, 8]));
// 7

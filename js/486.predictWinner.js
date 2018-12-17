/**
 * @param {number[]} nums
 * @return {boolean}
 */

// recursion
// 256ms
var PredictTheWinner = function(nums) {
  const n = nums.length;
  let total = 0;
  nums.forEach(d => (total += d));

  const helper2 = (left, right) => {
    if (left > right) return 0;
    if (left === right) return -nums[left];
    else {
      return Math.min(
        helper(left + 1, right) - nums[left],
        helper(left, right - 1) - nums[right]
      );
    }
  };

  const helper = (left, right) => {
    if (left > right) return 0;
    if (left === right) return nums[left];
    else {
      return Math.max(
        helper2(left + 1, right) + nums[left],
        helper2(left, right - 1) + nums[right]
      );
    }
  };

  const scoreDiff = helper(0, n - 1);
  // console.log(scoreDiff);
  return scoreDiff >= 0;
};

// better recursion
// 64ms
var PredictTheWinner = function(nums) {
  const n = nums.length;
  const cache = {};
  const helper = (left, right) => {
    if (left === right) return nums[left];
    if (cache[left + ',' + right]) return cache[left + ',' + right];

    let ret = Math.max(
      nums[left] - helper(left + 1, right),
      nums[right] - helper(left, right - 1)
    );

    cache[left + ',' + right] = ret;

    return ret;
  };

  return helper(0, n - 1) >= 0;
};

// best sol from web - it is implementation from discussion board
// 48 ms
// var PredictTheWinner = function(nums) {
//   let n = nums.length;
//   if ((n & 1) === 0) {
//     return true;
//   }
//   let dp = new Array(n);
//   for (let i = n - 1; i >= 0; i--) {
//     for (let j = i; j < n; j++) {
//       if (i === j) {
//         dp[i] = nums[i];
//       } else {
//         dp[j] = Math.max(nums[i] - dp[j], nums[j] - dp[j - 1]);
//       }
//     }
//   }
//   return dp[n - 1] >= 0;
// };

console.log(PredictTheWinner([0, 0]));
// true

console.log(PredictTheWinner([1]));
// true

console.log(PredictTheWinner([1, 2]));
// true

console.log(PredictTheWinner([1, 5, 233, 7]));
// true

console.log(PredictTheWinner([1, 5, 2]));
// false

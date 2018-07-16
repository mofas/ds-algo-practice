/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */

// 156ms
// slow
var findTargetSumWays = function(nums, S) {
  const n = nums.length;
  let map = new Map();
  let nextMap = null;
  if (nums[0] === 0) map.set(0, 2);
  else {
    map.set(nums[0], 1);
    map.set(-nums[0], 1);
  }
  for (let i = 1; i < n; i++) {
    if (nums[i] === 0) {
      map.forEach((val, key) => {
        map.set(key, val * 2);
      });
    } else {
      nextMap = new Map();
      map.forEach((val, key) => {
        const plusRet = key + nums[i];
        const negativeRet = key - nums[i];
        // console.log(key, plusRet, negativeRet);
        nextMap.set(plusRet, (nextMap.get(plusRet) || 0) + val);
        nextMap.set(negativeRet, (nextMap.get(negativeRet) || 0) + val);
        // console.log('innn', nextMap);
      });
      map = nextMap;
      // console.log(map);
    }
  }
  // console.log(map);
  return map.get(S) || 0;
};

// best sol from web

// dp
// The left-shift by 1 and right-shift by 1 are equivalent to multiplication and division by 2 respectively.
// var findTargetSumWays = function(nums, S) {
//   if (!nums || nums.length === 0) return 0;
//   var sum = 0;
//   for (var i = 0; i < nums.length; i++) {
//     sum += nums[i];
//   }
//   return sum < S || (S + sum) % 2 > 0 ? 0 : subsetSum(nums, (S + sum) >> 1);
// };

// var subsetSum = function(nums, s) {
//   var dp = [];
//   dp[0] = 1;
//   for (var i = 1; i < s + 1; i++) {
//     dp[i] = 0;
//   }
//   for (var n of nums) for (var i = s; i >= n; i--) dp[i] += dp[i - n];
//   return dp[s];
// };

console.log(findTargetSumWays([1], 1));
// 1

console.log(findTargetSumWays([1, 0], 1));
// 2

console.log(findTargetSumWays([1, 1, 1, 1, 1], 3));
// 5

console.log(findTargetSumWays([0, 0, 0, 0, 0, 0, 0, 0, 1], 1));
// 256

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// it is coin change problem

// recursive DP
// timeout
var combinationSum4 = function(nums, target) {
  nums.sort((a, b) => a - b);
  const cache = new Array(target + 1).fill(-1);
  const helper = current => {
    if (current === 0) return 1;
    if (cache[current] > 0) return cache[current];
    let ret = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > current) break;
      ret += helper(current - nums[i]);
    }
    cache[current] = ret;
    return ret;
  };
  return helper(target);
};

// iterative DP
// 60 ms
var combinationSum4 = function(nums, target) {
  nums.sort((a, b) => a - b);
  const dp = new Array(target + 1).fill(0);
  dp[0] = 1;
  for (let i = 1; i <= target; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] > i) break;
      dp[i] += dp[i - nums[j]];
    }
  }
  // console.log(dp);
  return dp[target];
};

console.log(combinationSum4([1, 2, 3], 4));
// 7
// (1, 1, 1, 1)
// (1, 1, 2)
// (1, 2, 1)
// (1, 3)
// (2, 1, 1)
// (2, 2)
// (3, 1)

console.log(combinationSum4([3, 33, 333], 10000));
// 0

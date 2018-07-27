/**
 * @param {number[]} nums
 * @return {number}
 */

// recursive DP
var deleteAndEarn = function(nums) {
  nums.sort((a, b) => a - b);
  const helper = (acc, list) => {
    let max = acc;
    let prev = null;
    for (let i = 0; i < list.length; i++) {
      const t = list[i];
      if (prev === t) continue;
      prev = t;
      let newList = list.slice();
      newList.splice(i, 1);
      newList = newList.filter(d => d !== t + 1 && d !== t - 1);
      max = Math.max(max, helper(acc + t, newList));
    }
    return max;
  };

  return helper(0, nums);
};

// iterate DP
// 112 ms
var deleteAndEarn = function(nums) {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  if (n === 0) return 0;

  const buckets = new Array(10001).fill(0);
  let max = 0;
  for (let i = 0; i < n; i++) {
    buckets[nums[i]]++;
    max = Math.max(max, nums[i]);
  }
  const dp = new Array(max + 1).fill(0);
  dp[0] = 0;
  dp[1] = buckets[1];
  for (let i = 2; i <= max; i++) {
    dp[i] = Math.max(buckets[i] * i + dp[i - 2], dp[i - 1]);
  }
  // console.log(dp);
  return dp[max];
};

// best sol from web
// 56ms
// it faster due it don't create buckets
// var deleteAndEarn = function(nums) {
//   var max = 0;
//   for (index in nums) {
//     var num = nums[index];
//     max = Math.max(max, num);
//   }
//   var dp = [];
//   for (var i = 0; i < max + 1; i++) {
//     dp[i] = 0;
//   }
//   for (index in nums) {
//     var num = nums[index];
//     dp[num] += num;
//   }

//   for (var i = 2; i < dp.length; i++) {
//     dp[i] = Math.max(dp[i] + dp[i - 2], dp[i - 1]);
//   }
//   return dp[max];
// };

console.log(deleteAndEarn([]));
// 0

console.log(deleteAndEarn([2, 3, 4]));
// 6

console.log(deleteAndEarn([2, 2, 3, 3, 3, 4]));
// 9

console.log(deleteAndEarn([1, 1, 1, 2, 4, 5, 5, 5, 6]));
// 18

console.log(
  deleteAndEarn([
    1,
    8,
    5,
    9,
    6,
    9,
    4,
    1,
    7,
    3,
    3,
    6,
    3,
    3,
    8,
    2,
    6,
    3,
    2,
    2,
    1,
    2,
    9,
    8,
    7,
    1,
    1,
    10,
    6,
    7,
    3,
    9,
    6,
    10,
    5,
    4,
    10,
    1,
    6,
    7,
    4,
    7,
    4,
    1,
    9,
    5,
    1,
    5,
    7,
    5
  ])
);
// 138

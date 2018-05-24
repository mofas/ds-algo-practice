/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
  const n = nums.length;
  let sum = 0;
  let j = 0;
  let minRange = n + 1;

  for (let i = 0; i < n; i++) {
    sum += nums[i];

    if (sum >= s) {
      while (sum - nums[j] >= s && j < i) {
        sum -= nums[j++];
      }
      // console.log(i, j);
      minRange = Math.min(minRange, i - j + 1);
    }
  }

  return minRange > n ? 0 : minRange;
};

// best sol
// just very minor diff
// const minSubArrayLen = (s, nums) => {
//   let left = 0;
//   let ans = Number.POSITIVE_INFINITY;
//   let sum = 0;
//   for (let i = 0; i < nums.length; i++) {
//     sum += nums[i];
//     while (sum >= s) {
//       ans = Math.min(ans, i - left + 1);
//       sum -= nums[left++];
//     }
//   }

//   return ans === Number.POSITIVE_INFINITY ? 0 : ans;
// }

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])); // 2

console.log(minSubArrayLen(11, [1, 2, 3, 4, 5])); // 3

console.log(minSubArrayLen(15, [1, 2, 3, 4, 5])); // 5

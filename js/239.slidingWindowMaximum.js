/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// https://leetcode.com/problems/sliding-window-maximum/discuss/65881/O(n)-solution-in-Java-with-two-simple-pass-in-the-array
// 96ms
var maxSlidingWindow = function(nums, k) {
  const n = nums.length;
  if (k === 0 || n === 0) return [];

  let maxRight = new Array(n).fill(0);
  let maxLeft = new Array(n).fill(0);
  maxLeft[0] = nums[0];
  maxRight[n - 1] = nums[n - 1];
  let ret = [];
  for (let i = 1; i < n; i++) {
    maxLeft[i] = i % k == 0 ? nums[i] : Math.max(maxLeft[i - 1], nums[i]);
    const j = n - i - 1;
    maxRight[j] = j % k == 0 ? nums[j] : Math.max(maxRight[j + 1], nums[j]);
  }

  ret = new Array(n - k + 1);
  for (let i = 0, j = 0; i + k <= n; i++) {
    ret[j++] = Math.max(maxRight[i], maxLeft[i + k - 1]);
  }
  return ret;
};

// best sol
// 88ms
var maxSlidingWindow = function(nums, k) {
  const queue = [];
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    while (queue.length && queue[0] <= i - k) queue.shift();
    while (queue.length && nums[queue[queue.length - 1]] < nums[i]) queue.pop();
    queue.push(i);
    if (i >= k - 1) {
      result.push(nums[queue[0]]);
    }
    console.log(i, queue, result);
  }
  return result;
};

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
// [3,3,5,5,6,7]

console.log(maxSlidingWindow([1, 2, 3, 4, 5, 6, 7, 4, 3, 2, 1, 2, 3], 5));
// [ 5, 6, 7, 7, 7, 7, 7, 4, 3]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

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

// 168 ms, faster than 92.83%
// 46.9 MB, less than 53.64%
var threeSum = function(nums) {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  const ret = [];
  for (let i = 0; i < n - 1; i++) {
    let j = i + 1;
    let k = n - 1;
    while (j < k) {
      if (nums[j] + nums[k] > -nums[i]) {
        k--;
      } else if (nums[j] + nums[k] < -nums[i]) {
        j++;
      } else {
        ret.push([nums[i], nums[j], nums[k]]);
        while (j < k && nums[j] === nums[j + 1]) j++;
        while (j < k && nums[k] === nums[k - 1]) k--;
        j++;
        k--;
      }
    }
    while (i + 1 < n && nums[i] === nums[i + 1]) i++;
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

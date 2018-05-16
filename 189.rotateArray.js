/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

const mod = (x, limit) => {
  while (x < 0) {
    x += limit;
  }
  return x % limit;
};

// in-place & O(n)
var rotate = function(nums, k) {
  const len = nums.length;
  let temp = null;
  let count = 0;
  let i = 0;
  let j = 0;
  while (count < len) {
    j = i;
    temp = nums[j];
    while (mod(j - k + len, len) !== i) {
      nums[j] = nums[mod(j - k + len, len)];
      j = mod(j - k + len, len);
      count++;
    }
    nums[j] = temp;
    i++;
    count++;
  }
  console.log('end', nums);
};

rotate([], 1); // []

rotate([1], 0); // [1]

rotate([1, 2], 0); // [1, 2]

rotate([1, 2], 1); // [2, 1]

rotate([1, 2], 2); // [1, 2]

rotate([1, 2], 3); // [2, 1]

rotate([1, 2, 3, 4, 5, 6, 7], 3); // [5,6,7,1,2,3,4]

rotate([-1, -100, 3, 99], 2); // [3,99,-1,-100]

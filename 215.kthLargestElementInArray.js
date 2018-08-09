/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// brute force
// 72ms
var findKthLargest = function(nums, k) {
  nums.sort((a, b) => b - a);
  return nums[k - 1];
};

// divide & conq
// my own version div & conq
const swap = (nums, i, j) => {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
};
// 96ms
var findKthLargest = function(nums, k) {
  const n = nums.length;
  const helper = (from, to) => {
    const pivot = nums[to];
    let idx = from;
    for (let i = from; i < to; i++) {
      if (nums[i] >= pivot) {
        swap(nums, i, idx++);
      }
      // console.log('t', i, idx, nums);
    }
    swap(nums, idx, to);
    // console.log(nums, from, idx, to);
    if (idx === k - 1) {
      return nums[idx];
    } else if (k <= idx) {
      return helper(from, idx - 1);
    } else {
      return helper(idx, to);
    }
  };

  return helper(0, n - 1);
};

// best sol from web
// var findKthLargest = (nums, k) => {
//   return quickSelect(nums, 0, nums.length - 1, k);
// };

// const quickSelect = (nums, lo, hi, k) => {
//   const p = Math.floor(Math.random() * (hi - lo + 1)) + lo;
//   swap(nums, p, hi);

//   for (var i = lo, j = lo; j < hi; j++) {
//     if (nums[j] <= nums[hi]) {
//       swap(nums, i++, j);
//     }
//   }
//   swap(nums, i, j);

//   const m = hi - i + 1;
//   if (m === k) {
//     return nums[i];
//   } else if (m > k) {
//     return quickSelect(nums, i + 1, hi, k);
//   } else {
//     return quickSelect(nums, lo, i - 1, k - m);
//   }
// };

console.log(findKthLargest([-1, -1], 2));
// -1

console.log(findKthLargest([6, 5, 4, 1, 2, 3], 3));
// 4

console.log(findKthLargest([4, 6, 5, 1, 2, 3], 1));
// 6

console.log(findKthLargest([1, 2, 3, 5, 6, 4], 1));
// 6

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 4));
// 3

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));
// 5

console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4));
// 4

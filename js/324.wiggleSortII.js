/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// https://leetcode.com/problems/wiggle-sort-ii/discuss/77677/O(n)%2BO(1)-after-median-Virtual-Indexing
const swap = (nums, i, j) => {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
};

var findKthLargest = (nums, k) => {
  return quickSelect(nums, 0, nums.length - 1, k);
};

const quickSelect = (nums, lo, hi, k) => {
  const p = Math.floor(Math.random() * (hi - lo + 1)) + lo;
  swap(nums, p, hi);

  let i = lo,
    j = lo;
  for (; j < hi; j++) {
    if (nums[j] <= nums[hi]) {
      swap(nums, i++, j);
    }
  }
  swap(nums, i, j);

  const m = hi - i + 1;
  if (m === k) {
    return nums[i];
  } else if (m > k) {
    return quickSelect(nums, i + 1, hi, k);
  } else {
    return quickSelect(nums, lo, i - 1, k - m);
  }
};

// 200ms
var wiggleSort = function(nums) {
  const len = nums.length;
  if (len < 2) return nums;
  // find median
  let median = findKthLargest(nums, Math.floor((len + 1) / 2));
  const A = x => (1 + 2 * x) % (len | 1);
  let i = 0;
  let j = 0;
  let k = len - 1;
  while (j <= k) {
    // console.log(j, A(j), median);
    if (nums[A(j)] > median) {
      swap(nums, A(i), A(j));
      i++;
      j++;
    } else if (nums[A(j)] < median) {
      swap(nums, A(j), A(k));
      k--;
    } else {
      j++;
    }
    // console.log(nums);
  }

  return nums;
};

// 100ms
// why???
// var wiggleSort = function(nums) {
//   let median = findKthLargest(nums, Math.floor((nums.length + 1) / 2));
//   let n = nums.length;
//   let left = 0;
//   let i = 0;
//   let right = n - 1;
//   while (i <= right) {
//       if (nums[newIndex(i, n)] > median) {
//           swap(nums, newIndex(left, n), newIndex(i, n));
//           left++;
//           i++;
//       } else if (nums[newIndex(i, n)] < median) {
//           swap(nums, newIndex(right, n), newIndex(i, n));
//           right--;
//       } else {
//           i++;
//       }
//   }
// };

// function newIndex(index, n) {
//   return (1 + 2 * index) % (n | 1);
// }

// function swap(nums, i, j) {
//   var temp = nums[i];
//   nums[i] = nums[j];
//   nums[j] = temp;
// }

// var findKthLargest = function(nums, k) {
//   let left = [];
//   let right = []
//   let pivot = nums[parseInt(nums.length / 2)]
//   let pivotCount = 0;
//   for (let i = 0; i < nums.length; i++) {
//       let num = nums[i]
//       if (num > pivot) {
//           right.push(num);
//       } else if (num < pivot) {
//           left.push(num);
//       } else {
//           pivotCount++;
//       }
//   }
//   if (k <= right.length) { //if larger includes k
//       return findKthLargest(right, k)
//   } else if (k - right.length - pivotCount <= 0) {
//       return pivot;
//   } else { //k is in smaller list
//       return findKthLargest(left, k - right.length - pivotCount);
//   }
// };

console.log(wiggleSort([1, 5, 1, 1, 6, 4]));
// [1, 4, 1, 5, 1, 6]

console.log(wiggleSort([1, 3, 2, 2, 3, 1]));
// [2, 3, 1, 3, 1, 2]

console.log(wiggleSort([1, 1, 2, 1, 2, 2, 1]));
// [1, 2, 1, 2, 1, 2, 1]

console.log(wiggleSort([4, 5, 5, 6]));
// [5,4,5,6]

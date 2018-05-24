// modified from 33
var search = function(nums, target) {
  const len = nums.length;
  if (len === 0) return false;

  let start = 0;
  let end = len - 1;
  while (start <= end) {
    const mid = start + Math.floor((end - start) / 2);
    // console.log(start, end, mid);
    if (nums[mid] === target) return true;

    // sequence matter.
    // I try put ums[mid] === nums[end] as first condition
    // it is much slower than this one

    if (nums[mid] < nums[end]) {
      if (target > nums[mid] && target <= nums[end]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    } else if (nums[mid] > nums[end]) {
      if (target < nums[mid] && target >= nums[start]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      // worst case, go linear
      end--;
    }
  }
  return false;
};

console.log(search([2, 5, 6, 0, 0, 1, 2], 0)); // true
console.log(search([3, 1, 1], 3)); // true
console.log(search([1, 1, 3, 1], 3)); // true
console.log(search([2, 5, 6, 0, 0, 1, 2], 3)); // false

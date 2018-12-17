// nearly patch binary search
var search = function(nums, target) {
  //
  const n = nums.length;
  let from = 0;
  let to = n - 1;

  while (from < to - 1) {
    let mid = from + Math.floor((to - from) / 2);
    // console.log(from, to, mid);
    const t = nums[to];
    if (nums[mid] === target) return mid;

    // min in the rear
    if (nums[mid] < nums[to]) {
      if (nums[mid] > target || target > nums[to]) {
        to = mid - 1;
      } else {
        from = mid + 1;
      }
    } else {
      if (nums[to] >= target || target > nums[mid]) {
        from = mid + 1;
      } else {
        to = mid - 1;
      }
    }
  }
  // console.log('end', from, to);
  if (nums[from] === target) return from;
  if (nums[to] === target) return to;
  return -1;
};

// not best but reasonable sol from website
// ideas are similiar. however, it control better edge condition, which make it run faster.
// var search = function(nums, target) {
//   const len = nums.length;
//   if (len === 0) {
//     return -1;
//   }
//   let start = 0;
//   let end = len - 1;
//   while (start <= end) {
//     const mid = start + Math.floor((end - start) / 2);
//     if (nums[mid] === target) {
//       return mid;
//     }
//     if (nums[mid] < nums[end]) {
//       if (target > nums[mid] && target <= nums[end]) {
//         start = mid + 1;
//       } else {
//         end = mid - 1;
//       }
//     } else {
//       if (target < nums[mid] && target >= nums[start]) {
//         end = mid - 1;
//       } else {
//         start = mid + 1;
//       }
//     }
//   }
//   return -1;
// };

console.log(search([4, 7, 8, 9, 2, 3], 4)); // 0

console.log(search([5, 1, 3], 5)); //0

console.log(search([5, 1, 2, 3, 4], 1)); // 1

console.log(search([8, 9, 2, 3, 4], 9)); // 1

console.log(search([4, 5, 6, 7, 0, 1, 2], 5)); // 1

console.log(search([0, 1, 2, 4, 5, 6, 7], 2)); // 2

console.log(search([4, 5, 6, 7, 0, 1, 2], 0)); // 4

console.log(search([4, 5, 6, 7, 8, 1, 2, 3], 8)); // 4

console.log(search([3, 4, 5, 6, 7, 0, 1, 2], 0)); // 5

console.log(search([7, 8, 9, 2, 3, 4], 4)); // 5

console.log(search([4, 5, 6, 7, 0, 1, 2], 3)); // -1

console.log(search([], 4)); // -1

console.log(search([7, 8, 9, 2, 3], 4)); // -1

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// first version, slow
var nextPermutation = function(nums) {
  const n = nums.length;

  let max = nums[n - 1];
  const sort = [];
  for (let i = n - 1; i >= 0; i--) {
    sort.push(nums[i]);

    if (nums[i] >= max) {
      max = nums[i];
    } else if (nums[i] < max) {
      for (let j = 0; j < sort.length; j++) {
        if (sort[j] > nums[i]) {
          nums[i] = sort[j];
          sort.splice(j, 1);
          break;
        }
      }
      sort.sort((a, b) => a - b);
      for (let j = 0; j < sort.length; j++) {
        nums[i + j + 1] = sort[j];
      }
      break;
    }
  }

  if (sort.length === n) {
    nums.sort((a, b) => a - b);
  }
  console.log(nums);
};

// concise and good sol from web
// var nextPermutation = function(nums) {
//   for (let i = nums.length - 1, j = nums.length - 2; j >= 0; i--, j--) {
//     if (nums[j] < nums[i]) {
//       for (let k = i; k < nums.length; k++) {
//         if (nums[k] > nums[j] && nums[k] <= nums[i]) {
//           i = k;
//         }
//       }
//       swap(nums, i, j);
//       reverseAt(nums, j + 1);
//       return;
//     }
//   }

//   nums.reverse();
// };

// var swap = function(nums, i, j) {
//   let val = nums[i];
//   nums[i] = nums[j];
//   nums[j] = val;
// };

// var reverseAt = function(nums, start) {
//   for (let i = start, j = nums.length - 1; i < j; i++, j--) {
//     swap(nums, i, j);
//   }
// };

nextPermutation([1, 2, 3]); //[1,3,2]

nextPermutation([1, 3, 2]); //[2,1,3]

nextPermutation([2, 1, 3]); //[2,3,1]

nextPermutation([2, 3, 1]); //[3,1,2]

nextPermutation([3, 1, 2]); //[3,2,1]

nextPermutation([3, 2, 1]); //[1,2,3]

nextPermutation([5, 3, 2, 4, 1]); // [5,3,4,1,2]

nextPermutation([4, 5, 9, 9, 6, 1]); // [4,6,1,5,9,9]

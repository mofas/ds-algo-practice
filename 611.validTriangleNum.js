/**
 * @param {number[]} nums
 * @return {number}
 */

// brute forece.
// var triangleNumber = function(nums) {
//   nums.sort((a, b) => a - b);
//   const len = nums.length;
//   let count = 0;
//   if (len < 3) return 0;

//   for (let i = 0; i < len - 2; i++) {
//     for (let j = i + 1; j < len - 1; j++) {
//       loop3: for (let k = j + 1; k < len; k++) {
//         if (nums[i] + nums[j] > nums[k]) {
//           // console.log('success', nums[i], nums[j], nums[k]);
//           count++;
//         }
//         if (nums[i] + nums[j] < nums[k]) {
//           // console.log('break');
//           break loop3;
//         }
//       }
//     }
//   }
//   return count;
// };

// quick check
var triangleNumber = function(nums) {
  nums.sort((a, b) => a - b);

  const len = nums.length;
  let count = 0;

  for (let i = len - 1; i > 1; i--) {
    let l = 0;
    let r = i - 1;
    while (l < r) {
      if (nums[l] + nums[r] > nums[i]) {
        count += r - l;
        r--;
      } else l++;
    }
  }
  return count;
};

console.log(triangleNumber([2, 2, 10])); // 0

console.log(triangleNumber([2, 2, 2])); // 1

console.log(triangleNumber([2, 2, 2, 2])); // 4

console.log(triangleNumber([2, 2, 3, 4])); // 3

console.log(triangleNumber([3, 2, 2, 4])); // 3

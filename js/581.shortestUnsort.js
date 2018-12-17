//brute force
// var findUnsortedSubarray = function(nums) {
//   const len = nums.length;
//   let start = len - 1;
//   let end = 0;
//   let max = nums[0];
//   for (let i = 1; i < len; i++) {
//     if (nums[i] > max) max = nums[i];
//     if (nums[i] < max) {
//       end = i;
//       let j = 0;
//       while (nums[i] >= nums[j]) {
//         j++;
//       }
//       if (j < start) start = j;
//     }
//   }
//   if (end === 0) {
//     return 0;
//   }
//   return end - start + 1;
// };

var findUnsortedSubarray = function(nums) {
  const len = nums.length;
  let start = 0;
  let end = -1;
  let min = nums[len - 1];
  let max = nums[0];
  for (let i = 1; i < len; i++) {
    if (nums[i] > max) max = nums[i];
    if (nums[len - i - 1] < min) min = nums[len - i - 1];
    if (nums[i] < max) end = i;
    if (nums[len - i - 1] > min) start = len - i - 1;
  }
  return end - start + 1;
};

console.log(findUnsortedSubarray([1, 2, 3, 4])); // 0

console.log(findUnsortedSubarray([1, 3, 2, 2, 2])); // 4

console.log(findUnsortedSubarray([2, 3, 3, 2, 4])); // 3

console.log(findUnsortedSubarray([2, 3, 1, 4])); // 3

console.log(findUnsortedSubarray([2, 3, 4, 1])); // 4

console.log(findUnsortedSubarray([3, 2, 1, 4])); // 3

console.log(findUnsortedSubarray([4, 3, 2, 1])); // 4

console.log(findUnsortedSubarray([4, 3, 2, 1, 6])); // 4

// /**
//  * @param {number[]} nums
//  * @return {string}
//  */

// // 64 ms, 98.72%
// //
// var largestNumber = function(nums) {
//   nums.sort((a, b) => {
//     let idx = 0;
//     const aStr = String(a);
//     const bStr = String(b);
//     const aLen = aStr.length;
//     const bLen = bStr.length;
//     while (idx < aLen || idx < bLen) {
//       digA = idx >= aLen ? Number(aStr[aLen - 1]) : Number(aStr[idx]);
//       digB = idx >= bLen ? Number(bStr[bLen - 1]) : Number(bStr[idx]);
//       if (digA > digB) return -1;
//       if (digA < digB) return 1;
//       idx++;
//     }
//     return 0;
//   });

//   if (nums[0] === 0) return '0';

//   for (let i = 0; i < nums.length - 1; i++) {
//     if (
//       Number(String(nums[i]) + String(nums[i + 1])) <
//       Number(String(nums[i + 1]) + String(nums[i]))
//     ) {
//       // console.log(
//       //   'trigger',
//       //   Number(String(nums[i]) + String(nums[i + 1])),
//       //   Number(String(nums[i + 1]) + String(nums[i]))
//       // );
//       temp = nums[i];
//       nums[i] = nums[i + 1];
//       nums[i + 1] = temp;
//     }
//   }
//   let ret = nums.join('');
//   return ret;
// };

// 68 ms
var largestNumber = function(nums) {
  nums.sort((a, b) => {
    const ab = Number(String(a) + String(b));
    const ba = Number(String(b) + String(a));
    if (ab > ba) return -1;
    else if (ba > ab) return 1;
    return 0;
  });
  if (nums[0] === 0) return '0';
  return nums.join('');
};

console.log(largestNumber([10, 2]));
// 210

console.log(largestNumber([3, 30, 34, 5, 9]));
// "9534330"

console.log(largestNumber([3, 34]));
// 343

console.log(largestNumber([0, 0]));
// 0

console.log(
  largestNumber([824, 938, 1399, 5607, 6973, 5703, 9609, 4398, 8247])
);
// '9609938824824769735703560743981399'
// 8247 824  < 824 8247

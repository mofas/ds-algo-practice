/**
 * @param {number[]} nums
 * @return {number[]}
 */

var majorityElement = function(nums) {
  const n = nums.length;
  const ret = [];

  let count1 = 0;
  let count2 = 0;
  let cand1 = null;
  let cand2 = null;
  nums.forEach(d => {
    if (cand1 === d) {
      count1++;
    } else if (cand2 === d) {
      count2++;
    } else if (count1 === 0) {
      cand1 = d;
      count1++;
    } else if (count2 <= 0) {
      cand2 = d;
      count2++;
    } else {
      count1--;
      count2--;
    }
  });

  // make sure
  let cc1 = 0;
  let cc2 = 0;
  nums.forEach(d => {
    if (d === cand1) cc1++;
    if (d === cand2) cc2++;
  });

  if (cc1 > n / 3) ret.push(cand1);
  if (cc2 > n / 3) ret.push(cand2);

  return ret;
};

// best sol from web
// it is exactly like mine,
// but it has some micro optimization

// var majorityElement = function(nums) {
//   var candidate1 = 0;
//   var candidate2 = 1;
//   var count1 = 0;
//   var count2 = 0;
//   var result = [];

//   for (var i = 0; i < nums.length; i++) {

//     if (candidate1 === nums[i]) {
//       count1++;
//     } else if (candidate2 === nums[i]) {
//       count2++
//     } else if (count1 === 0) {
//       candidate1 = nums[i];
//       count1++;
//     } else if (count2 === 0) {
//       candidate2 = nums[i];
//       count2++;
//     } else {
//       count1--;
//       count2--;
//     }
//   }

//   count1 = 0;
//   count2 = 0;

//   for (var j = 0; j < nums.length; j++) {
//     if (nums[j] === candidate1) {
//       count1++;
//     } else if (nums[j] === candidate2) {
//       count2++;
//     }
//   }

//   if (count1 > nums.length / 3) {
//     result.push(candidate1);
//   }

//   if (count2 > nums.length / 3) {
//     result.push(candidate2);
//   }

//   return result;
// };

console.log(majorityElement([3, 2, 3])); // [3]

console.log(majorityElement([1, 1, 1, 3, 3, 2, 2, 2])); // [1, 2]

console.log(majorityElement([1, 2, 3, 4])); // []

console.log(majorityElement([1, 2, 3, 4, 5, 6])); // []

/**
 * @param {number[]} nums
 * @return {number}
 */

const findMax = (nums, start, end) => {
  if (start > end) return 0;
  let max = 0;
  let numOfNeg = 0;
  let prodBeforeFirstNeg = 1;
  let prodAfterLastNeg = 1;
  let totalProduct = 1;

  if (start === end) return nums[start];

  for (let i = start; i <= end; i++) {
    const n = nums[i];
    if (n < 0) {
      numOfNeg++;
      prodAfterLastNeg = n;
      if (numOfNeg === 1) prodBeforeFirstNeg *= n;
    } else {
      prodAfterLastNeg *= n;
    }

    if (numOfNeg === 0) prodBeforeFirstNeg *= n;

    totalProduct *= n;
  }

  // console.log('result', prodBeforeFirstNeg, prodAfterLastNeg, totalProduct);

  if (totalProduct > 0) {
    return totalProduct;
  } else {
    return prodAfterLastNeg > prodBeforeFirstNeg
      ? totalProduct / prodAfterLastNeg
      : totalProduct / prodBeforeFirstNeg;
  }
};

var maxProduct = function(nums) {
  const n = nums.length;
  let max = -Infinity;
  let hasZero = false;
  let start = 0;
  for (let i = 0; i < n; i++) {
    if (nums[i] === 0) {
      max = Math.max(max, findMax(nums, start, i - 1));
      start = i + 1;
      hasZero = true;
    }
  }

  if (start < n) {
    max = Math.max(max, findMax(nums, start, n - 1));
  }

  return max < 0 ? (hasZero ? 0 : max) : max;
};

// best sol from web
// var maxProduct = function(nums) {
//   var max = nums[0];
//   var min = nums[0];
//   var res = nums[0];
//   for(var i=1; i<nums.length; i++){
//     var tmp = max;
//     max = Math.max(nums[i], max*nums[i], min*nums[i]);
//     min = Math.min(nums[i], min*nums[i], tmp*nums[i]);
//     res = Math.max(res, max);
//   }
//   return res;
// };

console.log(maxProduct([2, 3, -2, 4])); // 6

console.log(maxProduct([0, 1, 0, 0, 2, 0, 3, 4, 0, 0])); // 12

console.log(maxProduct([2, -3, 1, -5, 3, -2, 4])); // 120

console.log(maxProduct([-2, 0, -1])); // 0

console.log(maxProduct([-2, 0, -3, 0, 4])); // 4

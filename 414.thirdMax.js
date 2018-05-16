/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
  const len = nums.length;
  if (len < 3) {
    return Math.max(...nums);
  }
  let max = -Infinity;
  let second = -Infinity;
  let third = -Infinity;

  nums.forEach(d => {
    if (d > max) {
      third = second;
      second = max;
      max = d;
    } else if (d > second && d !== max) {
      third = second;
      second = d;
    } else if (d > third && d !== max && d !== second) {
      third = d;
    }
  });

  // console.log(max, second, third);
  return third === -Infinity ? max : third;
};

console.log(thirdMax([3, 2, 1])); // 1

console.log(thirdMax([2, 1])); // 2

console.log(thirdMax([2, 2, 3, 1])); // 1

console.log(thirdMax([3, 4, 2, 3, 2, 1])); // 2

console.log(thirdMax([2, 1, 1])); // 2

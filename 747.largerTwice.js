/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
  let max = -Infinity;
  let secondMax = -Infinity;
  let maxIndex = -1;
  if (nums.length === 1) {
    return 0;
  }
  nums.forEach((d, i) => {
    if (d > max) {
      secondMax = max;
      max = d;
      maxIndex = i;
    } else if (d > secondMax) {
      secondMax = d;
    }
  });
  if (max >= secondMax * 2) {
    return maxIndex;
  }
  return -1;
};

console.log(dominantIndex([3, 6, 1, 0])); // 1

console.log(dominantIndex([1, 2, 3, 4])); // -1

console.log(dominantIndex([1, 0, 7, 2, 3])); // 2

console.log(dominantIndex([1])); // 0
console.log(dominantIndex([1, 0])); // 0

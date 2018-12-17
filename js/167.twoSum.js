/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  const len = numbers.length;
  let start = 0,
    end = len - 1;
  while (start < end) {
    const sum = numbers[start] + numbers[end];
    if (sum === target) {
      return [start + 1, end + 1];
    } else if (sum > target) {
      end--;
    } else if (sum < target) {
      start++;
    }
  }
  return [];
};

console.log(twoSum([2, 7, 11, 15], 9));

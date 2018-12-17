// we can improve sorting by bucket sort.

var arrayPairSum = function(nums) {
  const sorted = nums.sort((a, b) => a - b);
  let acc = 0;
  for (let i = 0; i < nums.length; i += 2) {
    acc += sorted[i];
  }
  return acc;
};

console.log(arrayPairSum([1, 4, 3, 2])); // 4

console.log(arrayPairSum([1, 2, 3, 4, 5, 6])); // 9

console.log(arrayPairSum([-5, -2, -1, 0, 0, 1])); // -6

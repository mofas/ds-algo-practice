var pivotIndex = function(nums) {
  const sum = nums.reduce((acc, d) => acc + d, 0);
  const len = nums.length;
  let leftSum = 0;
  let rightSum = sum - nums[0];
  let pivot = -1;
  while (!(leftSum === rightSum || pivot === len - 1)) {
    pivot++;
    leftSum += nums[pivot];
    rightSum -= nums[pivot + 1];
    // console.log('====', pivot, leftSum, rightSum);
  }
  if (leftSum === rightSum) {
    return pivot + 1;
  }
  return -1;
};

console.log(pivotIndex([])); // -1

console.log(pivotIndex([1, 7, 3, 6, 5, 6])); // 3
console.log(pivotIndex([1, 2, 3])); // -1

console.log(pivotIndex([1, 1, 1, 1, 5, 4])); // 4
console.log(pivotIndex([-1, -1, -1, -1, -1, 0])); // 2

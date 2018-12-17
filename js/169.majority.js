var majorityElement = function(nums) {
  var num = nums[0],
    count = 0;

  nums.forEach(val => {
    if (val === num) {
      count++;
    } else if (count === 0) {
      num = val;
      count = 1;
    } else {
      count--;
    }
  });

  return num;
};

console.log(majorityElement([3, 2, 3])); // 3

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // 2

console.log(majorityElement([2, 4, 1, 1, 1, 3, 2])); // 1

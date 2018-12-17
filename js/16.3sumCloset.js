/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  const n = nums.length;
  nums.sort((a, b) => a - b);

  let closest = nums[0] + nums[1] + nums[n - 1];

  for (let i = 0; i < n - 2; i++) {
    let from = i + 1;
    let to = n - 1;
    while (from < to) {
      // console.log('inn', from, to, closest);
      let sum = nums[i] + nums[from] + nums[to];
      if (sum < target) {
        if (Math.abs(closest - target) > Math.abs(sum - target)) {
          // console.log('a', i, from, to);
          closest = sum;
        }
        from++;
      } else if (sum > target) {
        if (Math.abs(closest - target) > Math.abs(sum - target)) {
          // console.log('b', i, from, to);
          closest = sum;
        }
        to--;
      } else {
        // console.log('c', i, from, to);
        return target;
      }
    }
    while (i + 1 < n && nums[i + 1] === nums[i]) i++;
  }

  return closest;
};

console.log(threeSumClosest([-4, -1, 2, 1], 1));

console.log(threeSumClosest([0, 1, 2], 3));

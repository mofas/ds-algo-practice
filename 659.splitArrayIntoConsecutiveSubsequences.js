/**
 * @param {number[]} nums
 * @return {boolean}
 */

// 76ms
// beat 100%, the second is 84ms
var isPossible = function(nums) {
  // let i = 0;
  const n = nums.length;
  const groups = [];
  for (let i = 0; i < n; i++) {
    let inserted = false;
    for (let j = groups.length - 1; j >= 0; j--) {
      if (groups[j][1] + 1 === nums[i]) {
        inserted = true;
        groups[j][1] = nums[i];
        break;
      } else if (groups[j][1] + 1 < nums[i]) {
        // short circuit: check group
        if (groups[j][1] - groups[j][0] < 2) return false;
        break;
      }
    }

    if (!inserted) {
      groups.push([nums[i], nums[i]]);
    }
    // console.log(groups);
  }

  // check the last one
  for (let i = 0; i < groups.length; i++) {
    if (groups[i][1] - groups[i][0] < 2) return false;
  }

  return true;
};

console.log(isPossible([3, 4, 4, 5, 6, 7, 8, 9, 10, 11]));
// false

console.log(isPossible([1, 2]));
// false

console.log(isPossible([1, 1, 2, 2, 2]));
// false

console.log(isPossible([1, 2, 3, 4, 4, 5]));
// false

console.log(isPossible([1, 2, 3]));
// true

console.log(isPossible([1, 2, 3, 4]));
// true

console.log(isPossible([1, 2, 3, 3, 4, 5]));
// true

console.log(isPossible([1, 2, 3, 3, 4, 4, 5, 5]));
// true
